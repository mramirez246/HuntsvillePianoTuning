import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Locations.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_mainURL } from '../Constants'
import { Helmet } from 'react-helmet'
// 

export default function History() {
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
        firebaseGetPageViews({ Name: "Locations", Views: 0 })
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Locations | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Locations | Happy Code Template" />
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
            <div className="locations font1">
                <h1 className='page-title'>Locations & Hours</h1>
                <div className='location-pair'>
                    <div className='location-pair-split'>
                        <div>
                            <h1>Bagel City Location</h1>
                            <h2>1234 Everything St.<br />Bagel City, CA<br />12345 US</h2>

                        </div>
                        <div>
                            <h3>Hours:</h3>
                            <ul>
                                <li>Monday: 8:00 AM - 5:00 PM</li>
                                <li>Tuesday: 8:00 AM - 5:00 PM</li>
                                <li>Wednesday: 8:00 AM - 5:00 PM</li>
                                <li>Thursday: 8:00 AM - 5:00 PM</li>
                                <li>Friday: 8:00 AM - 5:00 PM</li>
                                <li>Saturday: <span className='red'>Closed</span></li>
                                <li>Sunday: <span className='red'>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='locations-wrap'>
                        <div className='locations-map'>
                            <iframe className="map" id="gmap_canvas" src="https://maps.google.com/maps?q=Imperial%20Palace%20Japan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='location-pair'>
                    <div className='location-pair-split'>
                        <div>
                            <h1>Bagel City Location</h1>
                            <h2>1234 Everything St.<br />Bagel City, CA<br />12345 US</h2>

                        </div>
                        <div>
                            <h3>Hours:</h3>
                            <ul>
                                <li>Monday: 8:00 AM - 5:00 PM</li>
                                <li>Tuesday: 8:00 AM - 5:00 PM</li>
                                <li>Wednesday: 8:00 AM - 5:00 PM</li>
                                <li>Thursday: 8:00 AM - 5:00 PM</li>
                                <li>Friday: 8:00 AM - 5:00 PM</li>
                                <li>Saturday: <span className='red'>Closed</span></li>
                                <li>Sunday: <span className='red'>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='locations-wrap'>
                        <div className='locations-map'>
                            <iframe className="map" id="gmap_canvas" src="https://maps.google.com/maps?q=Imperial%20Palace%20Japan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
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
