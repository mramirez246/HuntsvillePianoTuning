import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Contact.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/shop.jpg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
// 
import { AiFillMail, AiTwotonePhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { sendContactForm } from '../FIREBASE/firebase'
import { useDispatch } from 'react-redux'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'

export default function Contact() {
    const dispatch = useDispatch()

    const [missingInfo, setMissingInfo] = useState(false)

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

    const sendForm = () => {
        dispatch(setLoadingState(true))
        const name = document.querySelector('#tbName').value
        const email = document.querySelector('#tbEmail').value
        const reason = document.querySelector('#ddReason').value
        const message = document.querySelector('#taMessage').value

        if (name != "" && email != "" && reason != "" && message != "") {
            const components = {
                Name: name,
                Email: email,
                Reason: reason,
                Message: message
            }
            sendContactForm(components)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    setTimeout(() => {
                        document.querySelector('#tbName').value = ""
                        document.querySelector('#tbEmail').value = ""
                        document.querySelector('#ddReason').value = ""
                        document.querySelector('#taMessage').value = ""
                        dispatch(setSuccessState(false))
                        setMissingInfo(false)
                    }, 3000);
                })
                .catch(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setFailureState(true))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                        setMissingInfo(false)
                    }, 3000);
                })
        } else {
            setMissingInfo(true)
            dispatch(setLoadingState(false))
        }
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
            <div className="contact font1">
                <h1 className='page-title'>Contact Us</h1>
                <p className='contact-info'>Keep in touch by reaching out to us using this form or any of our contact methods.</p>
                <div className='contact-wrap'>
                    <div className='contact-left'>
                        <div className='contact-split'>
                            <div className='contact-pair'>
                                <label>Your name</label>
                                <input id="tbName" className={`no-border bg3 ${missingInfo ? "border-red" : ""}`} type="text" placeholder='John Doe' />
                            </div>
                            <div className='contact-pair'>
                                <label>Your email</label>
                                <input id="tbEmail" className={`no-border bg3 ${missingInfo ? "border-red" : ""}`} type="email" placeholder='jdoe@happy.com' />
                            </div>
                        </div>
                        <div className='contact-pair'>
                            <label>Reason for contact</label>
                            <select className={`no-border bg3 ${missingInfo ? "border-red" : ""}`} id='ddReason'>
                                <option>Question</option>
                                <option>Comment</option>
                                <option>Concern</option>
                            </select>
                        </div>
                        <div className='contact-pair'>
                            <label>Your message</label>
                            <textarea id="taMessage" className={`no-border bg3 ${missingInfo ? "border-red" : ""}`} placeholder='Leave a message here...'></textarea>
                        </div>
                        <button className='bg1 color2 no-border' onClick={sendForm}>Send</button>
                    </div>
                    <div className='contact-right'>
                        <div className='contact-methods'>
                            <div className='contact-method'>
                                <AiTwotonePhone className='contact-icon' /><p>123 456 7890</p>
                            </div>
                            <div className='contact-method'>
                                <AiFillMail className='contact-icon' /><p>happycode.inbox@gmail.com</p>
                            </div>
                            <div className='contact-method'>
                                <FaMapMarkerAlt className='contact-icon' /><p>1234 Everything St, Bagel City CA, 12345</p>
                            </div>
                        </div>
                        <img src={img1} />
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
