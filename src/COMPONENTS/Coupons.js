import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Coupons.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/coupon.jpeg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { Helmet } from 'react-helmet'
import { c_helmet, c_mainURL, c_routes } from '../Constants'

export default function Coupons() {
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
        firebaseGetPageViews({ Name: "Coupons", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Coupons", c_routes.coupons)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>New Deals!</h1>
                <br />
                <div className='coupons'>
                    <div className='coupon bg1 color2'>
                        <img src={img1} />
                        <div className='coupon-text'>
                            <p className='coupon-exp'>Good until July 26, 2023</p>
                            <h1 className='coupon-amt'>$5 off</h1>
                            <p className='coupon-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                        </div>
                    </div>
                    <div className='coupon bg1 color2'>
                        <img src={img1} />
                        <div className='coupon-text'>
                            <p className='coupon-exp'>Good until July 26, 2023</p>
                            <h1 className='coupon-amt'>$5 off</h1>
                            <p className='coupon-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                        </div>
                    </div>
                    <div className='coupon bg1 color2'>
                        <img src={img1} />
                        <div className='coupon-text'>
                            <p className='coupon-exp'>Good until July 26, 2023</p>
                            <h1 className='coupon-amt'>$5 off</h1>
                            <p className='coupon-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                        </div>
                    </div>
                </div>
                <br/>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
