import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Team.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import img1 from '../PHOTOS/portrait.jpeg'
import { Helmet } from 'react-helmet'
import { c_helmet, c_mainURL, c_routes } from '../Constants'

export default function Team() {
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

    const team = [
        {
            id: 0,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 1,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 2,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 3,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 4,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 5,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        },
        {
            id: 6,
            Name: "Mr. Everything Bagel",
            Position: "IT Configuration Analyst",
            Img: img1
        }
    ]

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Team", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Team", c_routes.team)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>Meet our team</h1>
                <p className='team-sub'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.
                </p>

                <div className='team-members'>
                    {
                        team.map((mem, i) => {
                            return (
                                <div className='team-member' key={i}>
                                    <img src={mem.Img} />
                                    <h1>{mem.Name}</h1>
                                    <p>{mem.Position}</p>
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
