import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

// 
import '../STYLESHEETS/Home5.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/sushi1.jpg'
import img2 from '../PHOTOS/sushi2.jpg'
import img3 from '../PHOTOS/sushi3.jpg'
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
            {c_helmet("Home", c_routes.home5)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="font1">
                <div className='home5-panel1'>
                    <img src={img1} />
                    <div>
                        <h1 className='home5-head color4'>EVERYTHING BAGEL</h1>
                        <p>{`${"If you believe in the bagel, then good things will come. Trust in everything.".toUpperCase()}`}</p>
                    </div>
                </div>
                <div className='home5-panel2'>
                    <div className='home5-panel2-block'>
                        <img className='home5-panel2-img' src={img2} />
                        <div className='home5-panel2-text'>
                            <p className='all-caps'>Serving the finest sushi.</p>
                            <button className='link all-caps'>Check Menu</button>
                        </div>
                    </div>
                    <div className='home5-panel2-block'>
                        <img className='home5-panel2-img' src={img3} />
                        <div className='home5-panel2-text'>
                            <p className='all-caps'>Dine with us.</p>
                            <button className='link all-caps'>Reserve table</button>
                        </div>
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
