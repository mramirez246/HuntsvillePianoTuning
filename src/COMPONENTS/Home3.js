import React, { useEffect } from 'react'
// 
import '../STYLESHEETS/Home3.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { Helmet } from 'react-helmet'
import { c_helmet, c_mainURL, c_routes } from '../Constants'

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
            {c_helmet("Home", c_routes.threehome)}
            {/* NAGIVATION */}
            <Navigation />

            {/* BODY */}
            <div className="home3 font1">
                <div className='top'>
                    <Link to="/"><img src={logo} /></Link>
                    <RxHamburgerMenu className='top-icon color2' onClick={openNav} />
                </div>
                <div className='padding'>
                    <h1 className='color2'>Everything is in the bagel, a corporation.</h1>
                </div>
                <div className='home3-cap bg5 color2'>
                    <h3>Bagel is in everything</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.</p>
                    <button className='home3-btn no-bg border1 color2'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
