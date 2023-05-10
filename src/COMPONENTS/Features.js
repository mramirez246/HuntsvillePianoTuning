import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Features.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import { FiTruck } from 'react-icons/fi'
import { c_helmet, c_mainURL, c_routes } from '../Constants'
import { Helmet } from 'react-helmet'

export default function Features() {
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

    const features = [
        {
            id: 0,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 1,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 2,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 3,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 4,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 5,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 6,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 7,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 8,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            id: 9,
            icon: <FiTruck className="feature-icon" />,
            Name: "Everything Feature",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
    ]

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Features", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Features", c_routes.features)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="features font1">
                <h1 className='page-title'>Features</h1>
                <p className='features-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                <br/>
                <div className='features-wrap'>
                    {
                        features.map((feat, i) => {
                            return (
                                <div key={i} className="feature-block">
                                    <div className='feature-icon-wrap bg3'>
                                        {feat.icon}
                                    </div>
                                    <h1 className='feature-name'>{feat.Name}</h1>
                                    <p className='feature-desc'>{feat.Desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
