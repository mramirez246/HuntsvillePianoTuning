// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, orderBy } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// 

// 
import { randomString } from '../Global'
// 
import { doc, setDoc, collection, getDocs, updateDoc, getDoc, where } from "firebase/firestore";
import { query, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import emailjs from 'emailjs-com';
// 
import { setBlogsState } from '../REDUX/SLICES/BlogsSlice'
import { setProductsState } from '../REDUX/SLICES/ProductsSlice'
import { setDashUserState } from "../REDUX/SLICES/DashboardUserSlice";
import { setPageViewsState } from '../REDUX/SLICES/PageViewsSlice'
import { setLoadingState } from "../REDUX/SLICES/LoadingSlice";
import { setContactEntriesState } from '../REDUX/SLICES/ContactEntriesSlice'
import { setEventTypesState } from '../REDUX/SLICES/EventTypesSlice'
import { setScheduledEventsState } from '../REDUX/SLICES/ScheduledEventsSlice'
import { emailjs_contact_templateID, emailjs_publicKey, emailjs_schedule_templateID, emailjs_serviceID, firebase_configObj } from "../Constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_configObj;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// FIRESTORE
// CONTACT
export const sendContactForm = async (args, params) => {
    await setDoc(doc(db, "ContactEntries", randomString(30)), {
        Name: args.Name,
        Email: args.Email,
        Reason: args.Reason,
        Message: args.Message,
        Date: args.Date
    });

    emailjs.send(emailjs_serviceID, emailjs_contact_templateID, params, emailjs_publicKey)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });


    // THIS WILL BE SENT TO BUSINESS
    // const myParams = {
    //     to_name: args.Name,
    //     to_email: args.Email,
    //     from_name: c_businessName,
    //     from_email: emailjs_fromEmail,
    //     message: args.Message,
    //     reply_to: emailjs_fromEmail
    // }

    // emailjs.send(emailjs_serviceID, emailjs_myContact_templateID, myParams, emailjs_publicKey)
    //     .then(function (response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //     }, function (error) {
    //         console.log('FAILED...', error);
    //     });
}
// BLOG
export const getBlogs = async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    var blogs = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const d = doc.data()
        const blog = {
            id: doc.id,
            Date: d.Date,
            Title: d.Title,
            Desc: d.Desc,
            ImgPath: d.ImgPath,
            Author: d.Author,
            Tags: d.Tags
        }
        blogs.push(blog)
    });
    dispatch(setBlogsState(blogs))
}
// 
// STORE
// Create a function that pulls products from DB
// Create function that updates the quantity
const createOrder = async (date, orderID, subTotal, tax, total) => {
    // Email Customer

    await setDoc(doc(db, "Orders", orderID), {
        Date: new Date(),
        SubTotal: subTotal,
        Tax: tax,
        Total: total
    });
}
const createOrderItems = async (orderID, cartItems) => {
    for (var i in cartItems) {
        const item = cartItems[i]
        await setDoc(doc(db, "Orders", orderID, "Items", randomString(10)), {
            Name: item.Name,
            Price: item.Price,
            Quantity: item.Quantity,
        });
    }
}
const updateProductQuantity = async (cartItems, products) => {
    // REVIEW
    for (var i in cartItems) {
        const item = cartItems[i]
        const itemRef = doc(db, "Products", item.id);

        for (var j in products) {
            if (products[j].id == item.id) {
                await updateDoc(itemRef, {
                    Quantity: products[j].Quantity - item.Quantity
                });
            }
        }
    }
}
export const purchaseItems = (date, subTotal, tax, total, cartItems, products) => {
    const orderID = randomString(10)
    createOrder(date, orderID, subTotal, tax, total)
        .then(() => {
            createOrderItems(orderID, cartItems)
            .then(() => {
                updateProductQuantity(cartItems, products)
            })
        })
}
export const getProducts = async (dispatch, setProducts, setCategories) => {
    var products = []
    var count = 0
    
    const querySnapshot = await getDocs(collection(db, "Products"), orderBy("Category"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const d = doc.data()
        const imgPath = d.Img
        getDownloadURL(ref(storage, imgPath))
            .then((url) => {
                count += 1
                const product = {
                    id: doc.id,
                    Name: d.Name,
                    Desc: d.Desc,
                    Price: d.Price,
                    Quantity: d.Quantity,
                    Category: d.Category,
                    Img: url
                }
                products.push(product)
                if (count == querySnapshot.size) {
                    dispatch(setProductsState(products))
                    setProducts(products)
                    var tempCategs = []
                    for (var i in products) {
                        tempCategs.push(products[i].Category)
                    }
                    const temp = [...new Set(tempCategs)]
                    setCategories(temp)
                }
            })
            .catch((error) => {
                // Handle any errors
                console.log(error)
            });
    });
}
// 
// SCHEDULE
export const getEventTypes = async (dispatch) => {
    const q = query(collection(db, "EventTypes"), orderBy("Type", "asc"));
    const _ = onSnapshot(q, (querySnapshot) => {
        const types = [];
        querySnapshot.forEach((doc) => {
            const d = doc.data()
            const type = {
                Type: d.Type,
                DOW: d.DOW,
                Duration: d.Duration,
                Desc: d.Desc,
                StartHour: d.StartHour,
                EndHour: d.EndHour
            }
            types.push(type)
        });
        dispatch(setEventTypesState(types))
    });
}
export const getScheduledEvents = async (dispatch, date, dateEnd) => {
    const fDateStart = Timestamp.fromDate(date)
    const fDateEnd = Timestamp.fromDate(dateEnd)
    const q = query(collection(db, "ScheduledEvents"), where("End", ">=", fDateStart), where("End", "<=", fDateEnd));
    const _ = onSnapshot(q, (querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
            const d = doc.data()
            const event = {
                id: doc.id,
                Name: d.Name,
                Start: d.Start,
                End: d.End,
                Type: d.Type
            }
            events.push(event)
        });
        const sorted = events.sort((a, b) => a.Start - b.Start);
        dispatch(setScheduledEventsState(sorted))
    });
}
export const createScheduledEvent = async (args, params) => {
    const fStart = Timestamp.fromDate(new Date(args.Start * 1000))
    const fEnd = Timestamp.fromDate(new Date(args.End * 1000))

    await setDoc(doc(db, "ScheduledEvents", randomString(15)), {
        Name: args.Name,
        End: fEnd,
        Start: fStart,
        Email: args.Email,
        Type: args.Type
    });

    emailjs.send(emailjs_serviceID, emailjs_schedule_templateID, params, emailjs_publicKey)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
export const firebaseCreateAppointmentType = async (args) => {
    await setDoc(doc(db, "EventTypes", randomString(15)), {
        Type: args.Type,
        StartHour: args.Start,
        EndHour: args.End,
        Desc: args.Desc,
        DOW: args.DOW,
        Duration: args.Duration
    })
}

// LOGIN
export const firebaseLogin = (email, password, setErrorMsg, setShowError, navigate, dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const _ = userCredential.user;
            // ...
            dispatch(setDashUserState({ Email: email }))
            navigate('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode == "auth/configuration-not-found") {
                setErrorMsg("Email not found.")
                setShowError(true)
            } else if (errorCode == "auth/invalid-email") {
                setErrorMsg("Email has incorrect format.")
                setShowError(true)
            }
            else if (errorCode == "auth/wrong-password") {
                setErrorMsg("Password is incorrect.")
                setShowError(true)
            }
            dispatch(setLoadingState(false))
        });
}
export const firebaseSignOut = (dispatch) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(setDashUserState({}))
    }).catch((error) => {
        // An error happened.
    });
}

// DASHBOARD
const firebaseStorePageViews = async (page) => {
    const pageRef = doc(db, "Pages", page.Name);
    await updateDoc(pageRef, {
        Views: page.Views + 1
    });
}
export const firebaseGetPageViews = async (page) => {
    const docRef = doc(db, "Pages", page.Name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const thing = {
            Name: docSnap.data().Name,
            Views: docSnap.data().Views
        }
        firebaseStorePageViews(thing)
    } else {
        // doc.data() will be undefined in this case
        firebaseCreatePageViews(page)
    }
}
const firebaseCreatePageViews = async (page) => {
    await setDoc(doc(db, "Pages", page.Name), {
        Views: 1,
        Name: page.Name
    });
}
// 
export const dashGetPageViews = async (dispatch) => {
    const q = query(collection(db, "Pages"), orderBy("Views", "desc"));
    const _ = onSnapshot(q, (querySnapshot) => {
        var pages = []
        querySnapshot.forEach((doc) => {
            const d = doc.data()
            const page = {
                id: doc.id,
                Name: d.Name,
                Views: d.Views
            }
            pages.push(page)
        });
        dispatch(setPageViewsState(pages))
    });
}
// 
export const dashGetContactEntries = async (dispatch) => {
    const q = query(collection(db, "ContactEntries"), orderBy("Date", "desc"));
    const _ = onSnapshot(q, (querySnapshot) => {
        var entries = []
        querySnapshot.forEach((doc) => {
            const d = doc.data()
            const entry = {
                id: doc.id,
                Name: d.Name,
                Email: d.Email,
                Reason: d.Reason,
                Message: d.Message
            }
            entries.push(entry)
        });
        dispatch(setContactEntriesState(entries))
    });
}

// FORMS
export const firebaseSendForm = async (files) => {
    const formID = randomString(20)
    for (var i in files) {
        const file = files[i]
        const storageRef = ref(storage, `Forms/${formID}/${file.Name}`);

        uploadBytes(storageRef, file.File).then((_) => {
            console.log('Uploaded a blob or file!');
        });
    }

}

// AUTH
/*

// ----------------- NEW USER--------------------
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

// ----------------- SIGN IN USER--------------------
import { signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    // -----------------SIGN OUT USER--------------------
    import { signOut } from "firebase/auth";

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

    // ----------------- CURRENT SIGNED IN USER--------------------
    const user = auth.currentUser;

    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
    } else {
        // No user is signed in.
    }

    // ----------------- VERIFY EMAIL USER--------------------
    import { sendEmailVerification } from "firebase/auth";

    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });

    // -----------------SEND NEW PASSWORD EMAIL--------------------
    import { sendPasswordResetEmail } from "firebase/auth";

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    // -----------------DELETE USER--------------------
    import { deleteUser } from "firebase/auth";

    const user = auth.currentUser;

    deleteUser(user).then(() => {
        // User deleted.
    }).catch((error) => {
        // An error ocurred
        // ...
    });

*/

// FIRESTORE
/*
// -----------------NEW DOC--------------------

import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});

// -----------------GET DOCS LISTENER--------------------

import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

// -----------------GET DOC--------------------

import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}

// -----------------GET DOCS--------------------

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});

// -----------------ORDER BY / LIMIT--------------------

import { query, orderBy, limit } from "firebase/firestore";

const q = query(citiesRef, orderBy("name"), limit(3));

// -----------------COMPOUND--------------------

import { query, where, orderBy, limit } from "firebase/firestore";

const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));

// -----------------UPDATE DOC--------------------

import { doc, updateDoc } from "firebase/firestore";

const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
    capital: true
});

// -----------------DELETE DOC--------------------

import { doc, deleteDoc } from "firebase/firestore";

await deleteDoc(doc(db, "cities", "DC"));

*/

// STORAGE
/*
// -----------------UPLOAD FILE--------------------
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storageRef = ref(storage, 'some-child');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
});

// -----------------DOWNLOAD FILE--------------------

import { getStorage, ref, getDownloadURL } from "firebase/storage";

getDownloadURL(ref(storage, 'images/stars.jpg'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
    })
    .catch((error) => {
        // Handle any errors
    });

//   -----------------DELETE FILE--------------------

import { getStorage, ref, deleteObject } from "firebase/storage";

// Create a reference to the file to delete
const desertRef = ref(storage, 'images/desert.jpg');

// Delete the file
deleteObject(desertRef).then(() => {
    // File deleted successfully
}).catch((error) => {
    // Uh-oh, an error occurred!
});
*/