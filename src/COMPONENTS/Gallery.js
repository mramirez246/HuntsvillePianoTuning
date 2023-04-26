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
import { c_mainURL } from '../Constants'
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
            <Helmet>
                <title>Gallery | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Gallery | Happy Code Template" />
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
