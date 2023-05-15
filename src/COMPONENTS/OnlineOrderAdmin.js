import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/OrderOnlineAdmin.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
// 
import { Link, useNavigate } from 'react-router-dom'
import { deleteOldPhoto, firebaseGetPageViews, getOrderProducts, newOrderProductDoc, newProduct, removeProduct, updateProduct } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'
import DashNavigation from './UTILITIES/DashNavigation'
import { doc } from 'firebase/firestore'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'
// 
import nophoto from '../PHOTOS/nophoto.jpg'
// 
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { HiXMark } from 'react-icons/hi2'
import { c_helmet, c_mainURL, c_routes } from '../Constants'
import { randomString, removeDupes, removeDuplicates } from '../Global'

export default function OrderOnlineAdmin() {
    const dashUser = useSelector((state) => state.dashUser.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function openNav() {
        if (window.innerWidth < 600) {
            document.querySelector(".nav-body").style.width = "100vw";
        } else if (window.innerWidth < 800) {
            document.querySelector(".nav-body").style.width = "50vw";
        } else if (window.innerWidth < 1000) {
            document.querySelector(".nav-body").style.width = "40vw";
        } else if (window.innerWidth < 1200) {
            document.querySelector(".nav-body").style.width = "35vw";
        } else {
            document.querySelector(".nav-body").style.width = "20vw";
        }
    }
    function closeNav() {
        document.querySelector(".nav-body").style.width = "0";
    }
    const [allProds, setAllProds] = useState([])
    const [toggleOrders, setToggleOrders] = useState(true)
    const [showNewProduct, setShowNewProduct] = useState(false)
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [newProdImg, setNewProdImg] = useState("")
    const [newProdFile, setNewProdFile] = useState("")
    const [editProdImg, setEditProdImg] = useState("")
    const [editProdFile, setEditProdFile] = useState("")
    const [fileType, setFileType] = useState("")
    const [missing, setMissing] = useState(false)
    const [categories, setCategories] = useState([])
    // 
    const [products, setProducts] = useState([])
    // 
    const [chosenProd, setChosenProd] = useState({})
    const [chosenCateg, setChosenCateg] = useState("All")

    const onChangeImg = () => {
        const img = document.querySelector('#file-upload')
        var file = img.files[0];
        if (!isValidImageFile(file)) {
            alert('Only JPG, JPEG, PNG, and GIF files are allowed.');
            img.value = ''; // Clear the file input field
        } else {
            // Proceed with file upload or other operations
            setNewProdFile(file)
            setFileType(file.type)
            var reader = new FileReader();
            reader.onload = function (event) {
                // Get the file content as a data URL
                var dataUrl = event.target.result;
                setNewProdImg(dataUrl)
            };
            reader.readAsDataURL(file);
        }

    }
    const onEditChangeImg = () => {
        const img = document.querySelector('#file-edit-upload')
        var file = img.files[0];
        setEditProdFile(file)
        setFileType(file.type)
        var reader = new FileReader();
        reader.onload = function (event) {
            // Get the file content as a data URL
            var dataUrl = event.target.result;
            setEditProdImg(dataUrl)
        };
        reader.readAsDataURL(file);
    }
    const m_NewProduct = () => {
        dispatch(setLoadingState(true))
        const name = document.querySelector('#tbName').value
        const price = document.querySelector('#tbPrice').value
        const category = document.querySelector('#tbCate').value
        const qty = document.querySelector('#tbQty').value
        const desc = document.querySelector('#taDesc').value
        const img = newProdImg

        if (name != "" && price != "" && desc != "" && category != "") {
            setMissing(false)
            const args = {
                id: randomString(25),
                Name: name,
                Category: category,
                Price: price,
                Qty: qty,
                Desc: desc,
                ImgPath: newProdImg != "" ? `OrderProducts/${randomString(12)}.${fileType == "image/png" ? "png" : "jpg"}` : "",
                Img: newProdFile,
                Dupe: false
            }

            newProduct(args)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    // GET ALL PRODUCTS
                    const thing = [...products,
                    {
                        id: args.id,
                        Name: args.Name,
                        Price: args.Price,
                        Category: args.Category,
                        Qty: args.Qty,
                        Desc: args.Desc,
                        Img: newProdImg != "" ? img : null,
                        Dupe: false,
                        ImgPath: newProdImg != "" ? `OrderProducts/${randomString(12)}.${fileType == "image/png" ? "png" : "jpg"}` : "",
                    }]
                    setProducts(thing)
                    const categs = []
                    categs.push(args.Category)
                    for (var i = 0; i < products.length; i = i + 1) {
                        categs.push(products[i].Category)
                    }
                    const otherThing = removeDupes(categs).sort()
                    setCategories(otherThing)
                    setAllProds([...allProds, {
                        id: args.id,
                        Name: args.Name,
                        Price: args.Price,
                        Category: args.Category,
                        Qty: args.Qty,
                        Desc: args.Desc,
                        Img: newProdImg != "" ? img : null,
                        Dupe: false,
                        ImgPath: newProdImg != "" ? `OrderProducts/${randomString(12)}.${fileType == "image/png" ? "png" : "jpg"}` : "",
                    }])
                    setNewProdImg("")
                    setNewProdFile("")
                    document.querySelector('#tbName').value = ""
                    document.querySelector('#tbCate').value = ""
                    document.querySelector('#tbPrice').value = ""
                    document.querySelector('#tbQty').value = ""
                    document.querySelector('#taDesc').value = ""
                    document.querySelector('#file-upload').file = null
                    setShowNewProduct(false)
                    setTimeout(() => {
                        dispatch(setSuccessState(false))
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setLoadingState(false))
                    dispatch(setFailureState(true))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                    }, 2000);
                })

        } else {
            dispatch(setLoadingState(false))
            setMissing(true)
        }
    }
    const m_EditProduct = () => {
        const oldPath = chosenProd.ImgPath
        if (editProdFile != "") {
            if (oldPath != "") {
                deleteOldPhoto(oldPath)
            }
        }
        const name = document.querySelector('#tbEditName').value
        const price = document.querySelector('#tbEditPrice').value
        const category = document.querySelector('#tbEditCate').value
        const qty = document.querySelector('#tbEditQty').value
        const desc = document.querySelector('#taEditDesc').value
        const img = editProdImg

        if (name != "" && price != "" && desc != "" && category != "") {
            setMissing(false)
            const args = {
                id: chosenProd.id,
                Name: name,
                Category: category,
                Price: price,
                Qty: qty,
                Desc: desc,
                ImgPath: editProdFile != "" ? `OrderProducts/${randomString(12)}.${fileType == "image/png" ? "png" : "jpg"}` : oldPath,
                Img: editProdFile != "" ? editProdFile : chosenProd.Img
            }


            updateProduct(args, editProdFile)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    // GET ALL PRODUCTS
                    const index = products.findIndex(item => item.id === args.id); // find the index of the object with id = 2
                    if (index !== -1) { // check if the object was found
                        products.splice(index, 1,
                            {
                                id: args.id,
                                Name: args.Name,
                                Price: args.Price,
                                Category: args.Category,
                                Qty: args.Qty,
                                Desc: args.Desc,
                                ImgPath: editProdFile != "" ? `OrderProducts/${randomString(12)}.${fileType == "image/png" ? "png" : "jpg"}` : args.ImgPath,
                                Img: editProdImg != "" ? img : null
                            }); // replace the object at the index with a new object
                    }

                    setEditProdImg("")
                    setEditProdFile("")
                    document.querySelector('#tbEditName').value = ""
                    document.querySelector('#tbEditCate').value = ""
                    document.querySelector('#tbEditPrice').value = ""
                    document.querySelector('#tbEditQty').value = ""
                    document.querySelector('#taEditDesc').value = ""
                    document.querySelector('#file-edit-upload').file = null
                    setShowEditProduct(false)
                    setTimeout(() => {
                        dispatch(setSuccessState(false))
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setLoadingState(false))
                    dispatch(setFailureState(true))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                    }, 2000);
                })

        } else {
            setMissing(true)
        }

    }
    const m_GetOrderProducts = () => {
        getOrderProducts(products, setProducts, setCategories, setAllProds)

    }
    const pickProduct = (prod) => {
        setShowEditProduct(true)
        setChosenProd(prod)
        setEditProdImg(prod.Img)
        setEditProdFile("")
        console.log(prod)
    }
    const m_DuplicateProduct = () => {
        dispatch(setLoadingState(true))
        const name = document.querySelector('#tbEditName').value
        const price = document.querySelector('#tbEditPrice').value
        const category = document.querySelector('#tbEditCate').value
        const qty = document.querySelector('#tbEditQty').value
        const desc = document.querySelector('#taEditDesc').value


        if (name != "" && price != "" && desc != "" && category != "") {
            setMissing(false)
            const args = {
                id: randomString(25),
                Name: name,
                Category: category,
                Price: price,
                Qty: qty,
                Desc: desc,
                ImgPath: chosenProd.ImgPath,
                Img: chosenProd.Img,
                Dupe: true
            }

            newOrderProductDoc(args)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    // GET ALL PRODUCTS
                    const thing = [...products,
                    {
                        id: args.id,
                        Name: args.Name,
                        Price: args.Price,
                        Category: args.Category,
                        Qty: args.Qty,
                        Desc: args.Desc,
                        Img: args.Img,
                        ImgPath: chosenProd.ImgPath,
                        Dupe: true
                    }]
                    setProducts(thing)
                    setEditProdImg("")
                    document.querySelector('#tbEditName').value = ""
                    document.querySelector('#tbEditCate').value = ""
                    document.querySelector('#tbEditPrice').value = ""
                    document.querySelector('#tbEditQty').value = ""
                    document.querySelector('#taEditDesc').value = ""
                    document.querySelector('#file-edit-upload').file = null
                    setShowEditProduct(false)
                    setTimeout(() => {
                        dispatch(setSuccessState(false))
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setLoadingState(false))
                    dispatch(setFailureState(true))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                    }, 2000);
                })

        } else {
            setMissing(true)
        }
    }
    const m_RemoveProduct = () => {
        const temp = { ...chosenProd }
        if (!chosenProd.Dupe) {
            if (temp.ImgPath != "") {
                deleteOldPhoto(temp.ImgPath)
            }
        }
        const tempID = chosenProd.id
        removeProduct(chosenProd)
            .then(() => {
                dispatch(setLoadingState(false))
                dispatch(setSuccessState(true))
                // GET ALL PRODUCTS
                const index = products.findIndex(item => item.id === tempID); // find the index of the object with the specified ID
                if (index !== -1) { // check if the object was found
                    products.splice(index, 1); // remove the object at the index
                }
                const allIndex = allProds.findIndex(item => item.id === tempID); // find the index of the object with the specified ID
                if (allIndex !== -1) { // check if the object was found
                    allProds.splice(allIndex, 1); // remove the object at the index
                }
                setEditProdImg("")
                document.querySelector('#tbEditName').value = ""
                document.querySelector('#tbEditCate').value = ""
                document.querySelector('#tbEditPrice').value = ""
                document.querySelector('#tbEditQty').value = ""
                document.querySelector('#taEditDesc').value = ""
                document.querySelector('#file-edit-upload').file = null
                setShowEditProduct(false)
                doCategThing()
                setTimeout(() => {
                    dispatch(setSuccessState(false))
                }, 2000);
            })
            .catch((error) => {
                console.log(error)
                dispatch(setLoadingState(false))
                dispatch(setFailureState(true))
                setTimeout(() => {
                    dispatch(setFailureState(false))
                }, 2000);
            })
    }
    const filterProds = (categ) => {
        setChosenCateg(categ)
        if (categ == "All") {
            setProducts(allProds)
        } else {
            setProducts(allProds)
            const filteredArray = allProds.filter(obj => obj.Category === categ);
            setProducts(filteredArray)
        }
    }
    const doCategThing = () => {
        const categs = []
        for (var i = 0; i < products.length; i = i + 1) {
            categs.push(products[i].Category)
        }
        const thing = removeDupes(categs).sort()
        setCategories(thing)
    }
    function isValidImageFile(file) {
        const allowedExtensions = ['jpg', 'jpeg', 'png']; // Add other allowed extensions if needed
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        return allowedExtensions.includes(fileExtension);
    }

    useEffect(() => {
        if (dashUser.Email == undefined) {
            navigate("/login")
        }
        window.scrollTo(0, 0)
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Order Online Admin", Views: 0 })
        m_GetOrderProducts()
    }, [])
    return (
        <div className='main'>
            {c_helmet("Order Online Admin", c_routes.orderonlineadmin)}
            {/* NAGIVATION */}
            <DashNavigation />
            <div className='top'>
                <Link to="/login"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className='admin-body padding font1'>
                <h1>Online Orders</h1>
                <br />
                <div className='admin-switch bg3'>
                    <button onClick={() => { setToggleOrders(true) }} className={`no-border ${toggleOrders ? 'bg1 color2' : 'no-bg color1'}`}>Orders</button>
                    <button onClick={() => { setToggleOrders(false) }} className={`no-border ${!toggleOrders ? 'bg1 color2' : 'no-bg color1'}`}>Products</button>
                </div>
                <br />
                {
                    toggleOrders ?
                        <div>
                            <div className='divider'></div>
                        </div> : <div></div>
                }
                {
                    !toggleOrders ?
                        <div className='admin-prod-wrap '>
                            <div className='divider'></div>
                            <div className='separate'>
                                <h1>All Products</h1>
                                <button onClick={() => { setShowNewProduct(true) }} className='admin-new-prod-btn bg1 color2 no-border'>New Product</button>
                            </div>
                            <br />
                            <div className='categ-btns'>
                                <button onClick={() => { filterProds("All") }} className={`${chosenCateg == "All" ? "bg1 color2 no-border" : "bg2 color1 border2"}`}>All</button>
                                {
                                    categories.map((cate, i) => {
                                        return (
                                            <button onClick={() => { filterProds(cate) }} className={`${cate == chosenCateg ? "bg1 color2 no-border" : "bg2 color1 border2"}`} key={i}>{cate}</button>
                                        )
                                    })
                                }
                            </div>
                            <br />
                            {
                                products.length > 0 ?
                                    <div className='admin-prods bg4'>
                                        {
                                            products.map((prod, i) => {
                                                return (
                                                    <div onClick={() => { pickProduct(prod) }} className='admin-prod bg2' key={i}>
                                                        <img src={prod.Img != null ? prod.Img : nophoto} />
                                                        <div className='separate-v'>
                                                            <h1>{prod.Name}</h1>
                                                            <div className='separate'>
                                                                <h3 className='admin-prod-price'>${prod.Price}</h3>
                                                                <h3 className='admin-prod-qty'>{prod.Qty}{parseInt(prod.Qty) > 0 ? "x" : ""}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> : <p>No products yet.</p>
                            }
                            <br />
                        </div> : <div></div>
                }
            </div>

            {
                showNewProduct ?
                    <div className='new-prod-wrap bg2 padding font1'>
                        <div className='separate'>
                            <h1>Enter Product Details</h1>
                            <HiXMark className='new-prod-close' onClick={() => { setShowNewProduct(false); setNewProdImg(""); setNewProdFile("") }} />
                        </div>
                        <div className='new-prod-form'>
                            <div className='prod-form-pair'>
                                <label>Product Name</label>
                                <input type="text" id="tbName" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='California Sushi Roll' />
                            </div>
                            <div className='new-prod-split'>
                                <div className='prod-form-pair'>
                                    <label>Price</label>
                                    <input type="text" id="tbPrice" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='20' />
                                </div>
                                <div className='prod-form-pair'>
                                    <label>Quantity</label>
                                    <input type="text" id="tbQty" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='50' />
                                </div>
                            </div>
                            <div className='prod-form-pair'>
                                <label>Category</label>
                                <input type="text" id="tbCate" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='Premium Rolls' />
                            </div>
                            <div className='prod-form-pair'>
                                <label>Description</label>
                                <textarea maxLength="175" id="taDesc" className={`prod-form-ta no-border bg3 font1 ${missing ? "border-red" : ""}`} placeholder='Max 175 characters'></textarea>
                            </div>
                            <div className='prod-form-pair'>
                                <label>Upload Photo</label>
                                <input type="file" id="file-upload" name="file-upload" accept="image/*" onChange={onChangeImg} />
                            </div>
                            <img className='new-prod-img' src={newProdImg} />
                            <button onClick={m_NewProduct} className='prod-btn bg1 color2 no-border'>Create</button>
                        </div>
                    </div> : <div></div>
            }
            {
                showEditProduct ?
                    <div className='new-prod-wrap bg2 padding font1'>
                        <div className='separate'>
                            <h1>Enter Product Details</h1>
                            <HiXMark className='new-prod-close' onClick={() => { setShowEditProduct(false); setNewProdImg(""); setNewProdFile("") }} />
                        </div>
                        <div className='new-prod-form'>
                            <div className='prod-form-pair'>
                                <label>Product Name</label>
                                <input type="text" id="tbEditName" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='California Sushi Roll' defaultValue={chosenProd.Name} />
                            </div>
                            <div className='new-prod-split'>
                                <div className='prod-form-pair'>
                                    <label>Price</label>
                                    <input type="text" id="tbEditPrice" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='20' defaultValue={chosenProd.Price} />
                                </div>
                                <div className='prod-form-pair'>
                                    <label>Quantity</label>
                                    <input type="text" id="tbEditQty" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='50' defaultValue={chosenProd.Qty} />
                                </div>
                            </div>
                            <div className='prod-form-pair'>
                                <label>Category</label>
                                <input type="text" id="tbEditCate" className={`prod-form-tb no-border bg3 ${missing ? "border-red" : ""}`} placeholder='Premium Rolls' defaultValue={chosenProd.Category} />
                            </div>
                            <div className='prod-form-pair'>
                                <label>Description</label>
                                <textarea maxLength="175" id="taEditDesc" className={`prod-form-ta no-border bg3 font1 ${missing ? "border-red" : ""}`} placeholder='Max 175 characters' defaultValue={chosenProd.Desc}></textarea>
                            </div>
                            <div className='prod-form-pair'>
                                <label>Upload Photo</label>
                                <input type="file" id="file-edit-upload" name="file-upload" accept="image/*" onChange={onEditChangeImg} />
                            </div>
                            <img className='new-prod-img' src={editProdImg} />
                            <button onClick={() => { m_EditProduct() }} className='prod-btn bg1 color2 no-border'>Update</button>

                            <div className='new-prod-split'>
                                <button onClick={() => { m_DuplicateProduct() }} className='prod-btn bg5 color2 no-border'>Duplicate</button>
                                <button onClick={() => { m_RemoveProduct() }} className='prod-btn bg-red color2 no-border'>Remove</button>
                            </div>
                        </div>
                    </div> : <div></div>
            }

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div >
    )
}
