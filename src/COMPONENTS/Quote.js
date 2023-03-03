import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Quote.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/stock2.jpg'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews, sendQuoteForm } from '../FIREBASE/firebase'
// 
import {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled
} from 'react-icons/tb'
import { c_businessName, emailjs_fromEmail, emailjs_quotes_message } from '../Constants'
import { useDispatch } from 'react-redux'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'

export default function Quote() {
    const dispatch = useDispatch()
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

    const submitQuote = () => {
        
        const service = document.querySelector('#ddService').value
        const fullName = document.querySelector("#tbFullName").value
        const email = document.querySelector('#tbEmail').value
        const additional = document.querySelector('#taAdditional').value

        if (service != "" && fullName != "" && email != "" && additional != "") {
            dispatch(setLoadingState(true))
            const params = {
                to_name: fullName,
                to_email: email,
                from_name: c_businessName,
                from_email: emailjs_fromEmail,
                message: emailjs_quotes_message,
                reply_to: emailjs_fromEmail
            }
            const args = {
                Service: service,
                Name: fullName,
                Email: email,
                Additional: additional
            }

            sendQuoteForm(args, params)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    setTimeout(() => {
                        dispatch(setSuccessState(false))
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setLoadingState(false))
                    dispatch(setFailureState(true))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                    }, 2000);
                })
        }
    }

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Quote", Views: 0 })
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
            <div className="padding font1">
                <h1 className='page-title'>Get a Quote</h1>
                <br />
                <div className='quotes'>

                    <div className=''>
                        <div className='quote-wrap'>
                            <div className='quote-block'>
                                <div className='together'>
                                    <TbSquareRoundedNumber1Filled color="" className="quote-icon" />
                                    <div className='quote-info'>
                                        <h1>Pick the service</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.</p>
                                    </div>
                                </div>
                                <div className='quote-content bg4'>
                                    <select id="ddService" className='quote-dd border2'>
                                        <option>Service 1</option>
                                        <option>Service 2</option>
                                        <option>Service 3</option>
                                        <option>Service 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='quote-block'>
                                <div className='together'>
                                    <TbSquareRoundedNumber2Filled color="" className="quote-icon" />
                                    <div className='quote-info'>
                                        <h1>Tell us about yourself</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.</p>
                                    </div>
                                </div>
                                <div className='quote-content bg4'>
                                    <div className='quote-input-pair'>
                                        <label>Full Name:</label>
                                        <input id="tbFullName" type="text" className="quote-tb border2" placeholder='John Doe' />
                                    </div>
                                    <div className='quote-input-pair'>
                                        <label>Email:</label>
                                        <input id="tbEmail" type="email" className="quote-tb border2" placeholder='jdoe@happy.com' />
                                    </div>
                                    <div className='quote-input-pair'>
                                        <label>Additional Information:</label>
                                        <textarea id="taAdditional" className='quote-ta border2' placeholder='Type any additional information for the business to review...'></textarea>
                                    </div>
                                    <button onClick={submitQuote} className='quote-btn bg1 color2 no-border'>Request Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src={img1} className="quote-img" />
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
