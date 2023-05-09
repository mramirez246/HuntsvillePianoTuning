import React, { useEffect } from 'react'
import { TfiClose } from 'react-icons/tfi'
// 
import '../../STYLESHEETS/Navigation.css'
// 
import logo from '../../PHOTOS/stock.png'
import { c_businessName, c_nav } from '../../Constants'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
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
                <img src={logo} onClick={() => { navigate('/') }} />
                <TfiClose className='nav-icon color1' onClick={closeNav} />
            </div>
            {c_nav()}
            <p className='copy font1 color1'>&copy; {c_businessName} 2023. All Rights Reserved.</p>
        </div>
    )
}
