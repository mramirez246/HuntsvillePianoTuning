import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsArrowRightCircle, BsQuestionCircle } from 'react-icons/bs'
// 
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import '../STYLESHEETS/FAQ.css'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_helmet, c_mainURL, c_routes } from '../Constants'
import { Helmet } from 'react-helmet'

export default function FAQ() {
    const faqs = [
        {
            id: 0,
            Question: "Why is there a bagel in everything?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a."
        },
        {
            id: 1,
            Question: "Is it possible to order pizza online?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a."
        },
        {
            id: 2,
            Question: "Can my shirt be made with custom print?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a."
        },
        {
            id: 3,
            Question: "Does my dog need a leash before grooming?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a."
        },
        {
            id: 4,
            Question: "How long do I wait until I can get another tattoo?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a."
        },
        {
            id: 5,
            Question: "Are there any protocols for bad plumbing?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nugget nisi suscipit a."
        },
        {
            id: 6,
            Question: "Am I in danger when I hear strange noise in circuit breaker?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit pizza a."
        },
        {
            id: 7,
            Question: "What if there was nothing in the bagel? Just saying that it is odd",
            Answer: "Here are some testing keywords that we can use to help the search do its thing. Pizza, Nugget."
        },
    ]
    const [chosenID, setChosenID] = useState(-1)
    const [tempFAQs, setTempFAQs] = useState([])

    const searchFAQ = () => {
        const search = document.querySelector("#tbSearch").value.toLowerCase()
        if (search != "") {
            const filtered = faqs.filter(x => x.Question.toLowerCase().includes(search) || x.Answer.toLowerCase().includes(search));
            setTempFAQs(filtered)
        } else {
            setTempFAQs(faqs)
        }

    }
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
        setTempFAQs(faqs)
        firebaseGetPageViews({ Name: "FAQ", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {c_helmet("Frequently Asked Questions", c_routes.faq)}
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="faq font1">
                <div className='padding'>
                    <h1 className='page-title'>FAQ</h1>
                    <p className='page-subtitle'>Frequently Asked Questions about our business</p>
                </div>
                <input onChange={searchFAQ} id="tbSearch" className='faq-input bg3 no-border' placeholder='Search by keyword...' />
                <div className='faq-wrap'>
                    {
                        tempFAQs.map((faq, i) => {
                            return (
                                <div onClick={() => { chosenID == faq.id ? setChosenID(-1) : setChosenID(faq.id) }} className='border2 faq-block' key={i}>
                                    <div className='separate'>
                                        <h1>{faq.Question}</h1>
                                        <div className="faq-icon"><BsQuestionCircle /></div>
                                    </div>
                                    {
                                        chosenID == faq.id ?
                                            <p>{faq.Answer}</p> : <div></div>
                                    }
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
