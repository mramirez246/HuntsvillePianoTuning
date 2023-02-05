import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/ScheduleAdmin.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { getScheduledEvents } from '../FIREBASE/firebase'
import { setScheduledEventsState } from '../REDUX/SLICES/ScheduledEventsSlice'
import { BsClockHistory } from 'react-icons/bs'
import DashNavigation from './UTILITIES/DashNavigation'

export default function ScheduleAdmin() {
    const dashUser = useSelector((state) => state.dashUser.value)
    const scheduledEvents = useSelector((state) => state.scheduledEvents.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [chosenDate, setChosenDate] = useState(new Date())
    const [myScheduledEvents, setMyScheduledEvents] = useState([])
    const [current, setCurrent] = useState(new Date())
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

    const getDate = () => {
        var date = document.querySelector("#dpDay").value
        var dateEnd = new Date(date.replace(/-/g, '\/'))
        dateEnd = parseInt(dateEnd.getTime() / 1000) + 86400
        dateEnd = new Date(dateEnd * 1000)
        date = new Date(date.replace(/-/g, '\/'))
        setChosenDate(date)
        getScheduledEvents(dispatch, date, dateEnd)
            .then(() => {
                var tempEves = []
                for (var i in scheduledEvents) {
                    const temp = {
                        ...scheduledEvents[i],
                        StartString: `${new Date(scheduledEvents[i].Start.seconds * 1000).getHours()}:${new Date(scheduledEvents[i].Start.seconds * 1000).getMinutes() < 10 ? "0" : ""}${new Date(scheduledEvents[i].Start.seconds * 1000).getMinutes()}`,
                        EndString: `${new Date(scheduledEvents[i].End.seconds * 1000).getHours()}:${new Date(scheduledEvents[i].End.seconds * 1000).getMinutes() < 10 ? "0" : ""}${new Date(scheduledEvents[i].End.seconds * 1000).getMinutes()}`,
                    }
                    tempEves.push(temp)
                    console.log(current > temp.Start.seconds)
                    console.log("-----")
                }
                setMyScheduledEvents(tempEves)
            })
    }

    function currentTime() {
        let date = new Date();
        setCurrent(new Date(date / 1000).getTime())
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        // let session = "AM";

        // if (hh == 0) {
        //     hh = 12;
        // }
        // if (hh > 12) {
        //     hh = hh - 12;
        //     session = "PM";
        // }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        // let time = hh + ":" + mm + ":" + ss + " " + session;
        let time = hh + ":" + mm + ":" + ss;

        document.getElementById("clock").innerText = time;
        let t = setTimeout(function () { currentTime() }, 1000);
    }

    useEffect(() => {
        if (dashUser.Email == undefined) {
            navigate("/login")
        }
        window.scrollTo(0, 0)
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "ScheduleAdmin", Views: 0 })
        currentTime()
    }, [])
    return (
        <div className='main'>
            {/* NAGIVATION */}
            <DashNavigation />
            <div className='top'>
                <Link to="/login"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className='schedule-admin font1'>
                <div>
                    <h1 className='page-title-sm'>Schedule Admin</h1>
                    <br />
                    <div className='clock-wrap'>
                        <BsClockHistory className='clock-icon' />
                        <h1 className='color3 schedule-clock' id="clock">0:00:00</h1>
                    </div>
                    <br/>
                    <input type="date" className='schedule-admin-date border2' id="dpDay" />
                    <br/>
                    <br/>
                    <button onClick={() => { getDate() }} className='schedule-admin-btn bg1 color2 no-border'>Get Scheduled Appointments</button>
                    <br/>
                    <br/>
                </div>
                <div className='schedule-admin-wrap'>
                    <div className='schedule-admin-times'>
                    {
                        myScheduledEvents.map((eve, i) => {
                            return (
                                <div className={`schedule-admin-eve ${eve.Start.seconds > current ? "border2 border-green" : "border3 bg3 color3"}`} key={i}>
                                    <div className='separate'>
                                        <div>
                                            <h2>{eve.Name}</h2>
                                            <p>{eve.Type}</p>
                                        </div>
                                        <h4>{eve.StartString}</h4>
                                    </div>

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
