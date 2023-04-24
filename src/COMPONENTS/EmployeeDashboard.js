import React, { useEffect } from 'react'
// 
import '../STYLESHEETS/Dashboard.css'
import logo from '../PHOTOS/stock.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dashGetContactEntries, dashGetPageViews, firebaseSignOut } from '../FIREBASE/firebase'
import { VscEye } from 'react-icons/vsc'

import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { RxHamburgerMenu } from 'react-icons/rx'
import Timecard from './Timecard'
import { c_mainURL } from '../Constants'
import { Helmet } from 'react-helmet'

export default function About() {
    const employee = useSelector((state) => state.employee.value)

    const navigate = useNavigate()
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

    useEffect(() => {
        if (employee.Email == undefined) {
            navigate("/employee-login")
        }
        window.scrollTo(0, 0)
        dashGetPageViews(dispatch)
        dashGetContactEntries(dispatch)
        dispatch(setLoadingState(false))
    }, [])
    return (
        <div className='main font1'>
            <Helmet>
                <title>Employee Dashboard | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Employee Dashboard | Happy Code Template" />
                <meta property="og:description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta property="og:url" content={`${c_mainURL}`} />
                <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
            </Helmet>
            <Timecard />
            {/* NAVGIATION */}

            {/* <div className='top'>
                <Link to="/login"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div> */}
            {/* <div className='dashboard'>
                <h1 className='page-title-sm dashboard-head'>Dashboard</h1>
                <div className='dashboard-wrap'>
                    <span className='dash-comp col1 bg2'>
                        <h1>Page Views</h1>
                        <p className='dash-comp-desc'>Discover which pages are getting the most views. This will determine which pages need to be optimized more often.</p>
                        <div className='page-views'>
                            {
                                pageViewPages.map((page, i) => {
                                    return (
                                        <div key={i} className='dash-pageviews-block separate border2'>
                                            <h3>{page.Name}</h3>
                                            <div className='flex'>
                                                <p className=''>{page.Views}</p>
                                                <VscEye color="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </span>
                </div>
            </div> */}

        </div>
    )
}
