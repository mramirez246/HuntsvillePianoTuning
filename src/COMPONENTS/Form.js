import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Form.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews, firebaseSendForm } from '../FIREBASE/firebase'
import { useDispatch } from 'react-redux'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'
import { c_mainURL } from '../Constants'
import { Helmet } from 'react-helmet'

export default function Form() {
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

    const [uploads, setUploads] = useState([])

    const getFiles = () => {
        const input = document.querySelector('#fu')
        const files = input.files
        var temp = []
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileUrl = URL.createObjectURL(file);
            const fileObj = {
                Name: file.name,
                URL: fileUrl,
                Type: file.type,
                File: file
            }
            temp.push(fileObj)
        }
        setUploads(temp)

    }
    const submitForm = () => {
        dispatch(setLoadingState(true))
        firebaseSendForm(uploads)
            .then(() => {
                dispatch(setLoadingState(false))
                dispatch(setSuccessState(true))
                setTimeout(() => {
                    dispatch(setSuccessState(false))
                    window.location.reload(false);
                }, 3000);
            })
            .catch((error) => {
                console.log(error)
                dispatch(setLoadingState(false))
                dispatch(setFailureState(true))
                setTimeout(() => {
                    dispatch(setFailureState(false))
                }, 3000);
            })
    }

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Form", Views: 0 })
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Form | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Form | Happy Code Template" />
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
            <div className="form font1">
                <h1 className='page-title'>Standard Form</h1>
                <br />
                <br />
                <div className='form-wrap'>
                    <span className='form-pair col4'>
                        <label>Textbox:</label>
                        <input className='border2' type="text" placeholder='Everything Bagel' id="tb" />
                    </span>
                    <span className='form-pair col2'>
                        <label>Textbox Email:</label>
                        <input className='border2' type="email" placeholder='Everything@Bagel.com' id="tb" />
                    </span>
                    <span className='form-pair col2'>
                        <label>Textbox Secure:</label>
                        <input className='border2' type="password" placeholder='********' id="tb" />
                    </span>
                    <span className='form-pair col3'>
                        <label>Textbox Medium:</label>
                        <input className='border2' type="text" placeholder='Everything Medium' id="tb" />
                    </span>
                    <span className='form-pair col1'>
                        <label>Textbox Small:</label>
                        <input className='border2' type="text" placeholder='Everything Small' id="tb" />
                    </span>
                    <span className='form-pair col1'>
                        <label>Date Picker:</label>
                        <input className='border2' type="date" id="dp" />
                    </span>
                    <span className='form-pair col1'>
                        <label>Time Picker:</label>
                        <input className='border2' type="time" id="tp" />
                    </span>
                    <span className='form-pair-h col1'>
                        <label>Checkbox:</label>
                        <input className='' type="checkbox" value="" id="cb" name="" />
                    </span>
                    <span className='form-pair-h col1'>
                        <label>Radio Button:</label>
                        <input className='border2' type="radio" id="ra" name="" />
                    </span>
                    <span className='form-pair col4'>
                        <label>Upload:</label>
                        <div className='border2'>
                            <input type="file" id="fu" multiple="multiple" onChange={() => { getFiles() }} />
                            <div className='form-uploads padding'>
                                {
                                    uploads.map((file, i) => {
                                        return (
                                            <div className='form-file' key={i}>
                                                {
                                                    file.Type == "image/png" || file.Type == "image/jpeg" ?
                                                        <img src={file.URL} />
                                                        : file.Type == "application/pdf" ?
                                                            <p>{file.Name}</p>
                                                            : file.Type == "video/quicktime" ?
                                                                <video src={file.URL} controls></video>
                                                                : file.Type == "audio/wav" ?
                                                                    <audio src={file.URL} controls></audio>
                                                                    :
                                                                    <div></div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </span>
                    <span className='form-pair col4'>
                        <label>Textarea:</label>
                        <textarea className='border2' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.' id="ta"></textarea>
                    </span>
                    <span className='form-pair col4'>
                        <label>Dropdown:</label>
                        <select className="col4 border2">
                            <option>Select one</option>
                            <option>Everything 1</option>
                            <option>Everything 2</option>
                            <option>Everything 3</option>
                            <option>Everything 4</option>
                        </select>
                    </span>
                    <button onClick={submitForm} className='form-btn col4 no-border bg1 color2'>Submit Form</button>

                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
