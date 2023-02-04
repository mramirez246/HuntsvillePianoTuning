import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Schedule.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews, getEventTypes, getScheduledEvents } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'

import { Timestamp } from "firebase/firestore";

export default function Schedule() {
    const eventTypes = useSelector((state) => state.eventTypes.value)
    const scheduledEvents = useSelector((state) => state.scheduledEvents.value)
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

    const [slots, setSlots] = useState([])

    const getDate = () => {
        var date = document.querySelector("#dpDay").value
        var dateEnd = new Date(date.replace(/-/g, '\/'))
        dateEnd = parseInt(dateEnd.getTime() / 1000) + 86400
        dateEnd = new Date(dateEnd * 1000)
        date = new Date(date.replace(/-/g, '\/'))
        getScheduledEvents(dispatch, date, dateEnd)
    }
    const getAvailableTimes = () => {
        const chosenDate = document.querySelector("#dpDay").value.replace(/-/g, '\/')

        if (chosenDate != "") {
            const type = document.querySelector('#ddType').value
            var chosenType = {}
            for (var i in eventTypes) {
                if (type == eventTypes[i].Type) {
                    chosenType = eventTypes[i]
                }
            }
            // 
            const duration = chosenType.Duration
            // 
            const open = new Date(chosenType.StartHour.seconds * 1000).getHours()
            const close = new Date(chosenType.EndHour.seconds * 1000).getHours()
            // 
            const startOfDay = new Date(chosenDate).setHours(open, 0, 0, 0) / 1000
            const endOfDay = new Date(chosenDate).setHours(close, 0, 0, 0) / 1000

            var tempSlots = []
            for (var i in scheduledEvents) {
                console.log(new Date(scheduledEvents[i].Start.seconds * 1000))
                console.log("---")
                console.log(new Date(scheduledEvents[i].End.seconds * 1000))
                console.log("-----------------")
            }

            for (var i = startOfDay; i <= endOfDay - chosenType.Duration * 60; i += 10 * 60) {
                const full = new Date(i)
                const tStart1 = full.getTime()
                const tEnd1 = (full.getTime()) + (duration * 60)


                if (scheduledEvents.length > 0) {
                    for (var j in scheduledEvents) {
                        const eve = scheduledEvents[j]
                        const tStart2 = eve.Start.seconds
                        const tEnd2 = eve.End.seconds

                        const res1 = (tStart1 >= tStart2 && tStart1 < tEnd2)
                        const res2 = (tEnd1 > tStart2 && tEnd1 < tEnd2)

                        if (!res1 && !res2) {
                            const thing = new Date(tStart1 * 1000)
                            const slot = `${thing.getHours()}:${thing.getMinutes() < 10 ? "0" : ""}${thing.getMinutes()}`
                            tempSlots.push(slot)
                            break;
                        } else {
                            break
                        }
                    }
                } else {
                    const thing = new Date(tStart1 * 1000)
                    const slot = `${thing.getHours()}:${thing.getMinutes() < 10 ? "0" : ""}${thing.getMinutes()}`
                    tempSlots.push(slot)
                }

            }
            setSlots(tempSlots)
        }
    }

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Schedule", Views: 0 })
        getEventTypes(dispatch)
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
            <div className="schedule font1">
                <h1 className='page-title'>Schedule</h1>
                <br />
                <div className='schedule-wrap'>
                    <div className='schedule-left'>
                        <div>
                            <h2 className='schedule-pick'>Pick a day:</h2>
                            <input type="date" className="schedule-pick-date border2" id="dpDay" onChange={getDate} />
                        </div>
                        <div>
                            <h2 className='schedule-pick'>Pick a Service:</h2>
                            <select id="ddType" className='schedule-pick-dd border2'>
                                {
                                    eventTypes.map((type, i) => {
                                        return (
                                            <option key={i}>{type.Type}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button className='schedule-pick-btn bg1 color2 no-border' onClick={getAvailableTimes}>Get Available Times</button>
                    </div>
                    <div className='schedule-right'>
                        {
                            slots.map((slot, i) => {
                                return (
                                    <div className='schedule-slot' key={i}>
                                        <button className='border2 no-bg color3'>{slot}</button>
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
