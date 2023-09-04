// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//

import {
    firebase_configObj,
} from "../Constants";
import Stripe from "stripe";
import { randomString, removeDupes } from "../Global";

const firebaseConfig = {
    apiKey: "AIzaSyAZn0AqPGDw1HaMom0m_smVNuJjbL08Nbo",
  authDomain: "huntsville-piano-tuning.firebaseapp.com",
  projectId: "huntsville-piano-tuning",
  storageBucket: "huntsville-piano-tuning.appspot.com",
  messagingSenderId: "7584070685",
  appId: "1:7584070685:web:5f45c200fe709420031af4",
  measurementId: "G-JDZ606D1CB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// FUNCTIONS
export const firebase_SendContactForm = async (args) => {
    const docID = randomString(25)
    await setDoc(doc(db, "ContactEntries", docID), {
        Name : args.Name,
        Email: args.Email,
        Subject : args.Subject,
        Message: args.Message
    });
}
export const firebase_GetScheduleOptions = (setOptions, setTypes) => {
    const q = query(collection(db, "ScheduleOptions"));
    const _ = onSnapshot(q, (querySnapshot) => {
        const options = [];
        querySnapshot.forEach((doc) => {
            const option = {
                id: doc.id,
                ...doc.data()
            }
            options.push(option);
        });
        setOptions(options)
        var tempArr = []
        for (let index = 0; index < options.length; index++) {
            const option = options[index];
            tempArr.push(option.Type)
        }
        var filteredArr = removeDupes(tempArr)
        setTypes(filteredArr)
    });
}
export const firebase_GetScheduledThings = async (setScheduledThings) => {
    const querySnapshot = await getDocs(collection(db, "ScheduledThings"));
    var scheduledThings = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const thing = {
            id: doc.id,
            ...doc.data()
        }
        scheduledThings.push(thing)
    });

    setScheduledThings(scheduledThings)
}
export const firebase_GetScheduleBlocks = async (setScheduleBlocks) => {
    const querySnapshot = await getDocs(collection(db, "ScheduleBlocks"));
    var scheduleBlocks = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const thing = {
            id: doc.id,
            ...doc.data()
        }
        scheduleBlocks.push(thing)
    });

    setScheduleBlocks(scheduleBlocks)
}
export const firebase_GetScheduleSettings = async (setScheduleSettings) => {
    const querySnapshot = await getDocs(collection(db, "ScheduleSettings"));
    var scheduleSettings = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const thing = {
            id: doc.id,
            ...doc.data()
        }
        scheduleSettings.push(thing)
    });

    setScheduleSettings(scheduleSettings)
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
