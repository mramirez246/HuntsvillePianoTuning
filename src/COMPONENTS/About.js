import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/About.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_helmet, c_routes } from '../Constants'

export default function About() {
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
        firebaseGetPageViews({ Name: "About", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("About", c_routes.about)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="about font1">
                <h1 className='page-title'>About Us</h1>
                <div className='about-wrap'>
                    <div className='about-section'>
                        <div className='about-top'>
                            <h2 className='about-sub all-caps'>Everything<br/> Bagel</h2>
                            <img src={img1} className="about-img" />
                        </div>
                        <div className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris, ut luctus nisl.<br /><br />

                            Integer turpis felis, venenatis a dui eu, pulvinar ultricies mi. Sed quis faucibus est, nec ullamcorper velit. Praesent scelerisque dolor erat, sed gravida tortor semper nec. Integer id orci in nisi fermentum fringilla. Sed vitae risus libero. Quisque diam nulla, posuere et convallis aliquet, congue eget nisi. Nulla facilisi. Aenean sit amet dui felis. Aliquam finibus elit in nibh gravida dapibus.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris, ut luctus nisl.<br /><br />

                            Integer turpis felis, venenatis a dui eu, pulvinar ultricies mi. Sed quis faucibus est, nec ullamcorper velit. Praesent scelerisque dolor erat, sed gravida tortor semper nec. Integer id orci in nisi fermentum fringilla. Sed vitae risus libero. Quisque diam nulla, posuere et convallis aliquet, congue eget nisi. Nulla facilisi. Aenean sit amet dui felis. Aliquam finibus elit in nibh gravida dapibus.<br /><br />
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
