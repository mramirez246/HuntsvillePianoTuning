import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

// 
import '../STYLESHEETS/Home6.css'
// 
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/city.jpg'
import img2 from '../PHOTOS/shop2.jpg'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_mainURL } from '../Constants';
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineBusinessCenter } from 'react-icons/md';

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
                <meta name="author" content="Happy Code Websites & Apps" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Home | Happy Code Template" />
                <meta property="og:description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta property="og:url" content={`${c_mainURL}`} />
                <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
                <meta property="og:site_name" content="2x10 Nails & Spa" />
                <meta property="og:type" content="website" />
            </Helmet>
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="font1">
                <div className='home6-panel1 border-bottom1'>
                    <div className='home6-split'>
                        <div className='home6-panel-text'>
                            <h1>Bagel Law and Associates<br />Everything is in the bagel, agreed.</h1>
                            <div className='home6-panel-flex'>
                                <p>If you believe that things can happen, then you should continue on your path. There is nothing to be afraid of. Move forward.</p>
                                <MdOutlineBusinessCenter className='home6-panel-icon color3' />
                            </div>
                        </div>
                        <div className='home6-panel-img'>
                            <img src={img1} className='home6-img' />
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='home6-split'>
                        <div className='home6-panel-img'>
                            <img src={img2} className='home6-img' />
                        </div>
                        <div className='home6-panel-text'>
                            <h1>Bagel Law and Associates<br />Everything is in the bagel, agreed.</h1>
                            <div className='home6-panel-flex'>
                                <p>If you believe that things can happen, then you should continue on your path. There is nothing to be afraid of. Move forward.</p>
                                <MdOutlineBusinessCenter className='home6-panel-icon color3' />
                            </div>

                        </div>


                    </div>
                    <div className='divider'></div>
                    <div className='home6-panel2'>
                        <h1>We are in the business of bagels, and more.</h1>
                        <br/>
                        <div className='home6-panel2-blocks'>
                            <div className='home6-panel2-block bg3'>
                                <div className=''>
                                    <MdOutlineBusinessCenter className='home6-panel2-icon' />
                                    <h2>Everything bagel and more. Second time.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                            </div>
                            <div className='home6-panel2-block bg3'>
                                <div className=''>
                                    <MdOutlineBusinessCenter className='home6-panel2-icon' />
                                    <h2>Everything bagel and more. Second time.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                            </div>
                            <div className='home6-panel2-block bg3'>
                                <div className=''>
                                    <MdOutlineBusinessCenter className='home6-panel2-icon' />
                                    <h2>Everything bagel and more. Second time.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                            </div>
                            <div className='home6-panel2-block bg3'>
                                <div className=''>
                                    <MdOutlineBusinessCenter className='home6-panel2-icon' />
                                    <h2>Everything bagel and more. Second time.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<br/><br/>
            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
