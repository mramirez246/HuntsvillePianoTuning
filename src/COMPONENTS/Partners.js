import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Partners.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import img1 from '../PHOTOS/PARTNERS/partner1.png'
import img2 from '../PHOTOS/PARTNERS/partner2.png'
import img3 from '../PHOTOS/PARTNERS/partner3.png'
import img4 from '../PHOTOS/PARTNERS/partner4.png'
import img5 from '../PHOTOS/PARTNERS/partner5.png'
import img6 from '../PHOTOS/PARTNERS/partner6.png'
import img7 from '../PHOTOS/PARTNERS/partner7.png'
import img8 from '../PHOTOS/PARTNERS/partner8.png'


export default function Partners() {
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

    const partners = [
        {
            id: 0,
            Img: img1,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 1,
            Img: img2,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 2,
            Img: img3,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 3,
            Img: img4,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 4,
            Img: img5,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 5,
            Img: img6,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 6,
            Img: img7,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
        {
            id: 7,
            Img: img8,
            Name: "Everything Bagel Co.",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a.",
            Link: "https://wearehappycode.com"
        },
    ]

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Partners", Views: 0 })
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
            <div className="partners font1">
                <h1 className='page-title'>Partners</h1>
                <div className='partners-wrap'>
                    <div className='partners-left'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. </p>
                    </div>
                    <div className='partners-right'>
                        {
                            partners.map((partner, i) => {
                                return (
                                    <div key={i} className="partner">
                                        <img src={partner.Img} className="border2" />
                                        <h1>{partner.Name}</h1>
                                        <p>{partner.Desc}</p>
                                        <a className='partner-link color1' target="_blank" href={partner.Link}>Visit Website</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
