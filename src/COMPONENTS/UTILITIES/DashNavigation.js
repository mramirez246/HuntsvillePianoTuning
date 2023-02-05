import React, { useEffect } from 'react'
import { TfiClose } from 'react-icons/tfi'
// 
import '../../STYLESHEETS/Navigation.css'
// 
import logo from '../../PHOTOS/stock.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { firebaseSignOut } from '../../FIREBASE/firebase'

export default function DashNavigation() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        <div className='nav-body bg2'>
            <div className='nav-top'>
                <img src={logo} />
                <TfiClose className='nav-icon color1' onClick={closeNav} />
            </div>
            <div className='nav-links font1'>
                <Link className='nav-link color1' to="/dashboard">Dashboard</Link>
                <Link className='nav-link color1' to="/scheduleadmin">Schedule</Link>
                <br />
                <button onClick={() => { firebaseSignOut(dispatch); navigate('/login') }} className='dash-out no-bg no-border red'>Sign Out</button>
            </div>
            <p className='copy font1 color1'>&copy; Happy Code 2023. All Rights Reserved.</p>
        </div>
    )
}
