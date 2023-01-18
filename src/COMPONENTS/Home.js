import React, { useEffect } from 'react'
// 
import '../STYLESHEETS/Home.css'
// 
import { RxArrowRight, RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'

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
            <div className="home font1">
                <div className='home-panel1'>
                    <div>
                        <h1>Everything is in a bagel, and a bagel is in everything.</h1>
                        <div className='home-panel1-img'></div>
                    </div>
                    <div className='home-right'>
                        <div className='home-panel1-img-right'></div>
                        <div className='home-panel1-right-info'>
                            <h2 className='home-panel1-sub'>Everything bagel, now.</h2>
                            <p className='home-panel1-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.
                            </p>
                            <button className='home-panel1-btn border2 color1 no-bg'>Order Now</button>
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
