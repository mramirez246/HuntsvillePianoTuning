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
            <div className='pricing font1'>
                <h1 className='page-title'>Pricing</h1>
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
