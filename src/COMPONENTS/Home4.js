import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

// 
import '../STYLESHEETS/Home4.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import img2 from '../PHOTOS/shop2.jpg'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_helmet, c_mainURL, c_routes } from '../Constants';
import { FaShoppingCart } from 'react-icons/fa'

export default function Home() {
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
            {c_helmet("Home", c_routes.home4)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="home font1">
                <div className='home4-wrap'>
                    <div className='home4-left'>
                        <img src={img1} className='home4-img img-left' />
                        <div className='home4-left-text'>
                            <h1 className='home4-head'>The Everything Bagel Company</h1>
                            <p className='home4-cap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.</p>
                            <div className='home4-split'>
                                <button className='no-border bg3 color1'><p>Learn Everything Here</p> <FaShoppingCart className='home4-icon' /></button>
                                <button className='no-border bg1 color2'><p>Get Bagel Here</p><FaShoppingCart className='home4-icon' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='home4-right'>
                        <img src={img2} className='home4-img img-right' />

                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
