import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Tutorials.css'
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/youtube-thumb.jpeg'
import video1 from '../VIDEOS/video1.mp4'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
// 
import { HiOutlineXMark } from 'react-icons/hi2'

export default function Tutorials() {
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

    const [showModal, setShowModal] = useState(false)
    const [modalMess, setModalMess] = useState("")

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Tutorials", Views: 0 })
    }, [])
    return (
        <div className='main'>
            {
                showModal ?
                    <div onClick={() => { setShowModal(false) }} className='modal-wrap black-out'>
                        <div className='modal-block bg2 color1 font1'>
                            {/* <div className='separate'>
                                <div></div><HiOutlineXMark className='modal-icon' />
                            </div> */}
                            <p>{modalMess}</p>
                        </div>
                    </div> : <div></div>
            }

            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>



            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>Tutorials</h1>
                <div className='tutorials'>
                    <h1 className='tutorials-head'>Videos</h1>
                    <br />
                    <div className='tutorials-videos-wrap'>
                        <div className='tutorials-videos-block'>
                            <video src={video1} controls="true" controlsList="nodownload"></video>
                            <h3>Everything Bagel Video</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <video src={video1} controls="true" controlsList="nodownload"></video>
                            <h3>Everything Bagel Video</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <video src={video1} controls="true" controlsList="nodownload"></video>
                            <h3>Everything Bagel Video</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <video src={video1} controls="true" controlsList="nodownload"></video>
                            <h3>Everything Bagel Video</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                    </div>

                    <h1 className='tutorials-head'>Youtube Links</h1>
                    <br />
                    <div className='tutorials-videos-wrap'>
                        <div className='tutorials-videos-block'>
                            <a target="_blank" href="https://www.youtube.com/watch?v=D8A_Hu_WqeQ">
                                <img className='border2 tutorial-thumb' src={img1} />
                            </a>
                            <h3>Everything Bagel YouTube Link</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <a target="_blank" href="https://www.youtube.com/watch?v=D8A_Hu_WqeQ">
                                <img className='border2 tutorial-thumb' src={img1} />
                            </a>
                            <h3>Everything Bagel YouTube Link</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <a target="_blank" href="https://www.youtube.com/watch?v=D8A_Hu_WqeQ">
                                <img className='border2 tutorial-thumb' src={img1} />
                            </a>
                            <h3>Everything Bagel YouTube Link</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
                        <div className='tutorials-videos-block'>
                            <a target="_blank" href="https://www.youtube.com/watch?v=D8A_Hu_WqeQ">
                                <img className='border2 tutorial-thumb' src={img1} />
                            </a>
                            <h3>Everything Bagel YouTube Link</h3>
                            <button onClick={() => { setShowModal(true); setModalMess("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. ") }} className='tutorials-btn no-bg no-border'>Show Details</button>
                        </div>
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
