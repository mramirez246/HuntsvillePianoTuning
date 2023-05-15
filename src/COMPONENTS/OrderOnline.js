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

export default function OrderOnline() {
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

    const m_GetProducts = () => {
        getOrderProducts(products, setProducts, setCategories, setAllProds)
    }
    const increaseCartQty = (prod) => {
        const temp = [...allProds]
        const index = allProds.findIndex(item => item.id === prod.id); // find the index of the object with id = 2
        if (index !== -1) { // check if the object was found
            temp.splice(index, 1, { ...prod, CartQty: prod.CartQty + 1 }); // replace the object at the index with a new object
        }
        setAllProds(temp)
        setProducts(temp)
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
        }
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
                <div className='padding'><h1 className='page-title-sm'>Order Online</h1></div>

                <div className='cate-btns'>
                    <button onClick={() => { setChosenCategory("All") }} className={`${chosenCategory == "All" ? "bg1 color2 no-border" : "bg2 color1 border2"}`}>All</button>
                    {
                        categories.map((cate, i) => {
                            return (
                                <button onClick={() => { setChosenCategory(cate) }} className={`${chosenCategory == cate ? "bg1 color2 no-border" : "bg2 color1 border2"}`} key={i}>{cate}</button>
                            )
                        })
                    }
                </div>
                <div className='divider'></div>
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
                                            <button onClick={() => { decreaseCartQty(prod)}} className='no-bg no-border'><TbSquareRoundedMinus className='prod-qty-icon' /></button>
                                            <p className='prod-qty'>{prod.CartQty}</p>
                                            <button onClick={() => {increaseCartQty(prod)}} className='no-bg no-border'><TbSquareRoundedPlus className='prod-qty-icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
