import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Reviews.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'

export default function Reviews() {
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
        firebaseGetPageViews({ Name: "Reviews", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>See what others are saying.</h1>
                <br/>
                <div className='reviews'>
                    <div className='review border3'>
                        <h1>"The best service I have ever experienced. Very friendly, and helpful people all around. Thank you!"</h1>
                        <br/>
                        <h2>Everything Bagel</h2>
                        <p className='color3'>Career Title, Location, Business Name</p>
                    </div>
                    <div className='review border3'>
                        <h1>"The best service I have ever experienced. Very friendly, and helpful people all around. Thank you!"</h1>
                        <br/>
                        <h2>Everything Bagel</h2>
                        <p className='color3'>Career Title, Location, Business Name</p>
                    </div>
                    <div className='review border3'>
                        <h1>"The best service I have ever experienced. Very friendly, and helpful people all around. Thank you!"</h1>
                        <br/>
                        <h2>Everything Bagel</h2>
                        <p className='color3'>Career Title, Location, Business Name</p>
                    </div>
                    <div className='review border3'>
                        <h1>"The best service I have ever experienced. Very friendly, and helpful people all around. Thank you!"</h1>
                        <br/>
                        <h2>Everything Bagel</h2>
                        <p className='color3'>Career Title, Location, Business Name</p>
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
