import React, { useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Timecard.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import EmployeeDashboardNavigation from './UTILITIES/EmployeeDashboardNavigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews, getLatestTimecardEntry, employeePunch } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'
import { randomString } from '../Global'

export default function Timecard() {
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
    const punch_ = (punch) => {
        dispatch(setLoadingState(true))
        employeePunch(employee.id, { id: randomString(25), Date: new Date(), Punch: punch })
            .then(() => {
                dispatch(setLoadingState(false))
                dispatch(setSuccessState(true))
                setTimeout(() => {
                    dispatch(setSuccessState(false))
                    getLatestTimecardEntry(employee.id, dispatch)
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

    const latestEntry = useSelector((state) => state.timecardEntry.value)
    const employee = useSelector((state) => state.employee.value)

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Timecard", Views: 0 })
        getLatestTimecardEntry(employee.id, dispatch).then(() => {
            console.log(latestEntry)
        })
    }, [])
    return (
        <div className='main'>
            {/* NAGIVATION */}
            <EmployeeDashboardNavigation />
            <div className='top'>
                <Link to="/employee-dashboard"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="padding font1">
                <h1 className='page-title'>Timecard</h1>
                <br />
                <div className='timecard-wrap'>
                    <p className='timecard-latest'>Latest Punch:<br /> "{latestEntry.Punch}" - {latestEntry.Date}</p>
                    <br />
                    <div className='timecard-btns'>
                        <button onClick={() => { punch_("In") }} className='bg1 color2 no-border'>Clock In</button>
                        <button onClick={() => { punch_("Out") }} className='border2 no-bg color1'>Clock Out</button>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom' style={{ position: "absolute", bottom: "0", right: "0", left: "0" }}>
                <Footer />
            </div>
        </div>
    )
}
