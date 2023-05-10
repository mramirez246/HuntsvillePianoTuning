import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Gallery.css'
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
import { useDispatch } from 'react-redux'
import { setPhotoState } from '../REDUX/SLICES/PhotoSlice'

export default function Gallery() {
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

    const images = [
        {
            Img: img1,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img1,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img1,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img1,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img2,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img2,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img2,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img2,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img3,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img3,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img3,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
        {
            Img: img3,
            Alt: "This is the alt attribute for this image.",
            Lens: "50mm",
            Title: "Gloomy",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan."
        },
    ]


    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Gallery", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Gallery", c_routes.gallery)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="gallery font1">
                <h1 className='page-title'>Gallery</h1>
                <div className='gallery-wrap'>
                    {
                        images.map((img, i) => {
                            return (
                                <img key={i} src={img.Img} alt={`${img.Alt}`} className="gallery-img" onClick={() => {
                                    dispatch(setPhotoState(img));
                                    navigate('/gallery-photo')
                                }} />
                            )
                        })
                    }
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
