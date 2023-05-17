import React, { useEffect, useState } from 'react'

// 
import '../STYLESHEETS/OrderOnline.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { firebaseGetPageViews, getOrderProducts } from '../FIREBASE/firebase'
import { c_helmet, c_mainURL, c_routes } from '../Constants';
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from 'react-icons/tb'
// 
import { HiShoppingCart } from 'react-icons/hi'
import { HiXMark } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'

export default function OrderOnline() {
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
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [chosenCategory, setChosenCategory] = useState("All")
    const [showCart, setShowCart] = useState(false)
    // 
    const [cartItems, setCartitems] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [cartItemID, setCartItemID] = useState("")

    const m_GetProducts = () => {
        dispatch(setLoadingState(true))
        getOrderProducts(products, setProducts, setCategories, setAllProds)
            .then(() => {
                dispatch(setLoadingState(false))
            })
            .catch(() => {
                dispatch(setLoadingState(false))
            })
    }
    const increaseCartQty = (prod) => {
        const temp = [...allProds]
        const index = allProds.findIndex(item => item.id === prod.id); // find the index of the object with id = 2
        if (index !== -1) { // check if the object was found
            temp.splice(index, 1, { ...prod, CartQty: prod.CartQty + 1 }); // replace the object at the index with a new object
        }
        setAllProds(temp)
        setProducts(temp)
        addToCart(temp)
    }
    const decreaseCartQty = (prod) => {
        if (prod.CartQty >= 1) {
            const temp = [...allProds]
            const index = allProds.findIndex(item => item.id === prod.id); // find the index of the object with id = 2
            if (index !== -1) { // check if the object was found
                temp.splice(index, 1, { ...prod, CartQty: prod.CartQty - 1 }); // replace the object at the index with a new object
            }
            setAllProds(temp)
            setProducts(temp)
            addToCart(temp)
        }
    }
    const filterProds = (categ) => {
        console.log(allProds)
        setChosenCategory(categ)
        if (categ == "All") {
            setProducts(allProds)
        } else {
            setProducts(allProds)
            const filteredArray = allProds.filter(obj => obj.Category === categ);
            setProducts(filteredArray)
        }
    }
    const addToCart = (temp) => {
        const thing = []
        for (var i = 0; i < temp.length; i = i + 1) {
            const item = temp[i]
            if (item.CartQty > 0) {
                thing.push(item)
            }
        }
        setCartitems(thing)
        calcTotal(temp)
    }
    const calcTotal = (temp) => {
        var thingSub = 0
        for (var i = 0; i < temp.length; i = i + 1) {
            const item = temp[i]
            if (item.CartQty > 0) {
                thingSub += (parseInt(item.Price) * item.CartQty)
            }
        }
        setSubTotal(thingSub)
        console.log(thingSub)
    }
    const updateCartDesc = (item) => {
        const desc = document.querySelector('#tbCartDesc').value

        const thing = {
            ...item,
            Note: desc
        }

        const cartIndex = cartItems.findIndex(it => it.id === item.id); // find the index of the object with the specified ID
        if (cartIndex !== -1) { // check if the object was found
            cartItems.splice(cartIndex, 1, thing); // replace the object at the index with a new object
          }
        const index = products.findIndex(it => it.id === item.id); // find the index of the object with the specified ID
        if (index !== -1) { // check if the object was found
            products.splice(index, 1, thing); // replace the object at the index with a new object
          }
        const allIndex = allProds.findIndex(it => it.id === item.id); // find the index of the object with the specified ID
        if (allIndex !== -1) { // check if the object was found
            allProds.splice(allIndex, 1, thing); // replace the object at the index with a new object
          }

          console.log(cartItems)
    }

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Order Online", Views: 0 })
        m_GetProducts()
    }, [])
    return (
        <div className='main'>
            {c_helmet("Order Online", c_routes.orderonline)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="font1">
                <div className='separate'>
                    <div className='padding'><h1 className='page-title-sm'>Order Online</h1></div>
                    <div className='padding'><HiShoppingCart onClick={() => { setShowCart(true) }} className='cart-icon' /></div>
                </div>

                <div className='cate-btns'>
                    <button onClick={() => { filterProds("All") }} className={`${chosenCategory == "All" ? "bg1 color2 no-border" : "bg2 color1 border2"}`}>All</button>
                    {
                        categories.map((cate, i) => {
                            return (
                                <button onClick={() => { filterProds(cate) }} className={`${chosenCategory == cate ? "bg1 color2 no-border" : "bg2 color1 border2"}`} key={i}>{cate}</button>
                            )
                        })
                    }
                </div>
                {/* <div className='divider'></div> */}
                <div className='bg3 prod-blocks padding'>
                    {
                        products.map((prod, i) => {
                            return (
                                <div key={i} className='padding prod-block bg2'>
                                    <img src={prod.Img} />
                                    <h1>{prod.Name}</h1>
                                    <div className='separate'>
                                        <h4 className='prod-price'>${prod.Price}</h4>
                                        <div className='prod-qty-btns'>
                                            <button onClick={() => { decreaseCartQty(prod) }} className='no-bg no-border'><TbSquareRoundedMinus className='prod-qty-icon' /></button>
                                            <p className='prod-qty'>{prod.CartQty}</p>
                                            <button onClick={() => { increaseCartQty(prod) }} className='no-bg no-border'><TbSquareRoundedPlus className='prod-qty-icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {
                showCart ?
                    <div className='cart border-left1 bg2 font1 border2'>
                        <div className='cart-top'>
                            <h2>Your cart</h2>
                            <HiXMark onClick={() => { setShowCart(false) }} className='cart-close' />
                        </div>
                        <div className='separate-v'>
                            {
                                cartItems.length == 0 ?
                                    <div>
                                        <p className='text-center'>No items in your cart.</p>
                                    </div> :
                                    <div className='cart-wrap'>
                                        {
                                            cartItems.map((item, i) => {
                                                return (
                                                    <div key={i} className='cart-block bg4'>
                                                        <div className='separate'>
                                                            <div className=''>
                                                            <h1>{item.Name}&nbsp;&nbsp; <span className='color3 thin'>x{item.CartQty}</span></h1>
                                                            <p className='cart-note color3'>{item.Note}</p>
                                                                </div>
                                                            <p className='cart-price'>${item.Price}</p>
                                                        </div>
                                                        <button onClick={() => { cartItemID != item.id ? setCartItemID(item.id) : setCartItemID("") }} className='no-bg underline no-border'>{cartItemID == item.id ? "Save Note" : "Add Note"}</button>
                                                        {
                                                            cartItemID == item.id ?
                                                                <div className='cart-details'>
                                                                    <input defaultValue={item.Note} onChange={() => {updateCartDesc(item)}} id="tbCartDesc" type="text" className='cart-desc' />
                                                                </div> : <div></div>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                            <div className='cart-total-wrap'>
                                <div className='cart-total-block separate'>
                                    <h3>Subtotal</h3>
                                    <p>${subTotal}</p>
                                </div>
                                <button className='bg1 color2 no-border'>Place Order</button>
                            </div>
                        </div>
                    </div> : <div></div>
            }

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
