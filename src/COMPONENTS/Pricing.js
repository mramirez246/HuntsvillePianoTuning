import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
// 
import '../STYLESHEETS/Pricing.css'
import Footer from './UTILITIES/Footer';
import Navigation from './UTILITIES/Navigation';
// 
import logo from '../PHOTOS/stock.png'
import { firebaseGetPageViews } from '../FIREBASE/firebase';
import { Helmet } from 'react-helmet';
import { c_mainURL } from '../Constants';

export default function Pricing() {
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
        firebaseGetPageViews({ Name: "Pricing", Views: 0 })
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Pricing | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Pricing | Happy Code Template" />
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
            <div className='pricing font1'>
                <h1 className='page-title'>Pricing</h1>
                <br/>
                <div className='pricings'>
                    <div className='pricing-block border2'>
                        <h2 className='pricing-name'>Everything Bagel</h2>
                        <h1 className='pricing-price'>$42.99</h1>
                        <p className='pricing-desc'>Things are all over bagels, but there is more than you think.</p>
                        <ul className='pricing-block-list'>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                        </ul>
                    </div>
                    <div className='pricing-block border2'>
                        <h2 className='pricing-name'>Everything Bagel</h2>
                        <h1 className='pricing-price'>$42.99</h1>
                        <p className='pricing-desc'>Things are all over bagels, but there is more than you think.</p>
                        <ul className='pricing-block-list'>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                        </ul>
                    </div>
                    <div className='pricing-block border2'>
                        <h2 className='pricing-name'>Everything Bagel</h2>
                        <h1 className='pricing-price'>$42.99</h1>
                        <p className='pricing-desc'>Things are all over bagels, but there is more than you think.</p>
                        <ul className='pricing-block-list'>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                            <li><AiOutlineCheckCircle /><p>Here is something you should know about this.</p></li>
                        </ul>
                    </div>
                </div>
                <div className='pricing-info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.</p>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
