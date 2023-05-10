import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Portfolio.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import img1 from '../PHOTOS/portfolio1.jpeg'
import img2 from '../PHOTOS/portfolio2.jpeg'
import { BsArrowRight } from 'react-icons/bs'
import { Helmet } from 'react-helmet'
import { c_helmet, c_mainURL, c_routes } from '../Constants'

export default function Portfolio() {
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
        firebaseGetPageViews({ Name: "Portfolio", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Portfolio", c_routes.portfolio)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>My Portfolio</h1>
                <div className='portfolio-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.</div>
                <div className='portfolio-wrap'>
                    <div className='portfolio-block'>
                        <img src={img1} className="portfolio-left" />
                        <div className='portfolio-right bg1 color2'>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                            <a href="" className='portfolio-link color2'><p>View Project</p><BsArrowRight className='color2' /></a>
                        </div>
                    </div>
                    <div className='portfolio-block'>
                        <img src={img2} className="portfolio-left" />
                        <div className='portfolio-right bg1 color2'>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                            <a href="" className='portfolio-link color2'><p>View Project</p><BsArrowRight className='color2' /></a>
                        </div>
                    </div>
                    <div className='portfolio-block'>
                        <img src={img1} className="portfolio-left" />
                        <div className='portfolio-right bg1 color2'>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                            <a href="" className='portfolio-link color2'><p>View Project</p><BsArrowRight className='color2' /></a>
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
