import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/TimecardAdmin.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { dashGetEmployees, firebaseGetPageViews, dashGetPunches } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'
import DashNavigation from './UTILITIES/DashNavigation'
// 
import { HiOutlineChevronDown } from 'react-icons/hi'
import { HiOutlineChevronUp } from 'react-icons/hi2'
import { Timestamp } from 'firebase/firestore'
import { setPunchesState } from '../REDUX/SLICES/PunchesSlice'
import { setTotalHoursState } from '../REDUX/SLICES/TotalHoursSlice'
import { c_mainURL } from '../Constants'
import { Helmet } from 'react-helmet'

export default function TimecardAdmin() {
    const dashUser = useSelector((state) => state.dashUser.value)
    const employees = useSelector((state) => state.employees.value)
    const punches = useSelector((state) => state.punches.value)
    const totalHours = useSelector((state) => state.totalHours.value)
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


    const [chosenEmp, setChosenEmp] = useState({})

    const chooseEmp = (emp) => {
        if (chosenEmp.id == emp.id) {
            setChosenEmp({})
        } else {
            dispatch(setPunchesState([]))
            setChosenEmp(emp)
            dispatch(setTotalHoursState(""))
        }
    }
    const getPunches = () => {
        var from = document.querySelector('#dpFrom').value
        var to = document.querySelector('#dpTo').value

        if (from != "" && to != "") {
            from = new Date(from.replace(/-/g, '\/'))
            from = Timestamp.fromDate(from)
            to = new Date(to.replace(/-/g, '\/'))
            to = Timestamp.fromDate(to)
            dashGetPunches(chosenEmp, from, to, dispatch)
        }
    }

    useEffect(() => {
        if (dashUser.Email == undefined) {
            navigate("/login")
        }
        window.scrollTo(0, 0)
        closeNav()
        firebaseGetPageViews({ Name: "TimecardAdmin", Views: 0 })
        dashGetEmployees(dispatch)
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Timecard Admin | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Timecard Admin | Happy Code Template" />
                <meta property="og:description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta property="og:url" content={`${c_mainURL}`} />
                <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
            </Helmet>
            {/* NAGIVATION */}
            <DashNavigation />
            <div className='top'>
                <Link to="/login"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className='padding font1'>
                <h1 className='page-title'>Timecards</h1>
                <br />
                <div className='employees'>
                    {
                        employees.map((emp, i) => {
                            return (
                                <div className='border2' key={i}>
                                    <div className='emp-pair separate'>
                                        <h1 onClick={() => { chooseEmp(emp) }}>{emp.Name}</h1>
                                        {chosenEmp.id == emp.id ? <HiOutlineChevronUp onClick={() => { chooseEmp(emp) }} className='emp-icon' /> : <HiOutlineChevronDown onClick={() => { chooseEmp(emp) }} className='emp-icon' />}
                                    </div>
                                    {
                                        chosenEmp.id == emp.id ?
                                            <div className=''>
                                                <div className='emp-date-wrap'>
                                                    <div className='emp-date-pair'>
                                                        <label>From:</label>
                                                        <input id="dpFrom" type="date" className='border2 emp-dp' />
                                                    </div>
                                                    <div className='emp-date-pair'>
                                                        <label>To:</label>
                                                        <input id="dpTo" type="date" className='border2 emp-dp' />
                                                    </div>
                                                </div>
                                                <button onClick={getPunches} className='emp-btn color2 bg1 no-border'>Get Punches</button>
                                                <table className='punch-table'>
                                                    <tr className='punch-tr'>
                                                        <th className='punch-th'>Punch</th>
                                                        <th className='punch-th'>Date / Time</th>
                                                    </tr>
                                                    {
                                                        punches.map((punch, j) => {
                                                            return (
                                                                <tr className='punch-tr' key={j}>
                                                                    <td className={`punch-td ${punch.Punch == "In" ? 'green' : 'red'}`}>{punch.Punch}</td>
                                                                    <td className='punch-td'>{punch.Date}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </table>
                                                <h1 className="punch-total">Total: {totalHours} hrs</h1>
                                            </div> : <div></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* FOOTER */}
            {/* <div className='bottom'>
                <Footer />
            </div> */}
        </div >
    )
}
