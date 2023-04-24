import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Awards.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import { FaAward, FaTrophy } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import { c_mainURL } from '../Constants'

export default function Awards() {
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
        firebaseGetPageViews({ Name: "Awards", Views: 0 })
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Awards | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Awards | Happy Code Template" />
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
            <div className="padding font1">
                <h1 className='page-title'>Awards</h1>
                <p className='page-subtitle'>Every year, we strive to be the best in any way we can. We want our customers to have the best experience with our products and services. Doing so, brings us joy and satisfaction knowing that we have done our best to serve our communities.</p>
                <div className='awards-wrap'>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaAward color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaTrophy color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaAward color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaTrophy color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaAward color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaTrophy color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
                    </div>
                    <div className='award bg4'>
                        <div className='separate'>
                            <FaAward color="F8D704" className='award-icon' />
                            <h4 className='award-year'>2013</h4>
                        </div>
                        <h1 className='award-title'>Business of the year award.</h1>
                        <p className='award-desc'>Award is granted to the achievement of receiving the highest score in customer satisfaction within the state.</p>
                        <h3 className='award-region'>California, USA</h3>
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
