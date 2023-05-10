import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/GalleryPhoto.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link, useNavigate } from 'react-router-dom'
// 
import img1 from '../PHOTOS/car.jpg'
import img2 from '../PHOTOS/city.jpg'
import img3 from '../PHOTOS/van.jpg'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { Helmet } from 'react-helmet'
import { c_helmet, c_mainURL, c_routes } from '../Constants'
import { useSelector } from 'react-redux'
// 
import { BsArrowLeft } from 'react-icons/bs'

export default function Gallery() {
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

    const photo = useSelector((state) => state.photo.value)
    const navigate = useNavigate()
    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Gallery", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Gallery Photo", c_routes.galleryphoto)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="font1">
                <BsArrowLeft className='back' onClick={() => { navigate('/gallery') }} />
                <img src={photo.Img} className='photo-img' />
                <div className='photo-desc bg4'>
                    <p className='photo-desc-title'>{photo.Title}</p>
                    <p className='photo-desc-desc'>{photo.Desc}</p>
                    <p className='photo-desc-lens color3'>{photo.Lens}</p>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
            <style>
            </style>
        </div>
    )
}
