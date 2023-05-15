import React, { useEffect } from 'react'

// 
import '../STYLESHEETS/Home3.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import img2 from '../PHOTOS/shop2.jpg'
// 
import { Link, Route } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_helmet, c_mainURL, c_routes } from '../Constants';
import { FiArrowUpRight } from 'react-icons/fi'

export default function Home3() {
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

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Home", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Home", c_routes.home3)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='home3-title all-caps'>Everything Bagel Company</h1>
                <br/>
                <p className='home3-subtitle all-caps'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. 
                </p>
                <br/>
                <img src={img1} className='home3-img' />
                <div className='separate'>
                    <div></div>
                    <a href="" className='home3-link color1'><p>Order Now</p><FiArrowUpRight className='home3-icon' /></a>
                </div>
                <br/>
                <h2 className='home3-caption all-caps'>
                    Welcome to Happy Code Dev. A coding business made to boost sales and get you more customers.
                </h2>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
