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
import { c_mainURL } from '../Constants';
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
            <Helmet>
                <title>Home | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Home | Happy Code Template" />
                <meta property="og:description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta property="og:url" content={`${c_mainURL}`} />
                <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
            </Helmet>
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