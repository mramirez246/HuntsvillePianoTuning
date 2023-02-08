import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Form.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'

export default function Form() {
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
        firebaseGetPageViews({ Name: "Form", Views: 0 })
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
        <button className='form-btn col4 no-border bg1 color2'>Submit Form</button>

                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
