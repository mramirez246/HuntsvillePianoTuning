import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiXMark } from 'react-icons/hi2'
// 
import '../STYLESHEETS/Schedule.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import Modal from './UTILITIES/Modal'
import { Link } from 'react-router-dom'
import { createScheduledEvent, firebaseGetPageViews, getEventTypes, getScheduledEvents } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'

import { getDayOfWeek_Word, getMonth_Word } from '../Global'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'
import { c_businessName, c_mainURL, emailjs_fromEmail, emailjs_schedule_message } from '../Constants'
import { setEventTypesState } from '../REDUX/SLICES/EventTypesSlice'
import { Helmet } from 'react-helmet'

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

    const [types, setTypes] = useState([])
    const [slots, setSlots] = useState([])
    const [chosenDate, setChosenDate] = useState("")
    const [chosenService, setChosenService] = useState("")
    const [chosenSlotInfo, setChosenSlotInfo] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const getDate = () => {
        var date = document.querySelector("#dpDay").value
        var dateEnd = new Date(date.replace(/-/g, '\/'))
        dateEnd = parseInt(dateEnd.getTime() / 1000) + 86400
        dateEnd = new Date(dateEnd * 1000)
        date = new Date(date.replace(/-/g, '\/'))
        setChosenDate(date)
        getScheduledEvents(dispatch, date, dateEnd)
            .then(() => {
                const dayOfWeek = new Date(date).getDay()
                const dayOfWeekStr = getDayOfWeek_Word(dayOfWeek)
                var temp = eventTypes.filter(x => x.DOW.includes(dayOfWeekStr))
                setTypes(temp)
            })
    }
    const getAvailableTimes = () => {
        const chosenDate = document.querySelector("#dpDay").value.replace(/-/g, '\/')
        if (chosenDate != "") {
            const type = document.querySelector('#ddType').value.split(" ~ ")[0]
            var chosenType = {}
            for (var i in eventTypes) {

                if (type == eventTypes[i].Type) {
                    chosenType = eventTypes[i]
                    setChosenService(eventTypes[i])
                }
            }

            // 
            if (chosenType.Type != undefined) {
                const duration = chosenType.Duration
                // 
                const open = new Date(chosenType.StartHour.seconds * 1000).getHours()
                const close = new Date(chosenType.EndHour.seconds * 1000).getHours()
                // 
                const startOfDay = new Date(chosenDate).setHours(open, 0, 0, 0) / 1000
                const endOfDay = new Date(chosenDate).setHours(close, 0, 0, 0) / 1000

                var tempSlots = []
                // for (var i in scheduledEvents) {
                //     console.log(new Date(scheduledEvents[i].Start.seconds * 1000))
                //     console.log("---")
                //     console.log(new Date(scheduledEvents[i].End.seconds * 1000))
                //     console.log("-----------------")
                // }

                for (var i = startOfDay; i <= endOfDay - chosenType.Duration * 60; i += duration * 60) {
                    const full = new Date(i)
                    const tStart1 = full.getTime()
                    const tEnd1 = (full.getTime()) + (duration * 60)


                    if (scheduledEvents.length > 0) {
                        var taken = false
                        for (var j in scheduledEvents) {
                            const eve = scheduledEvents[j]
                            const tStart2 = eve.Start.seconds
                            const tEnd2 = eve.End.seconds

                            const res1 = (tStart1 >= tStart2 && tStart1 < tEnd2)
                            const res2 = (tEnd1 > tStart2 && tEnd1 < tEnd2)

                            if (res1 || res2) {
                                taken = true
                            }

                        }
                        if (!taken) {
                            const thing = new Date(tStart1 * 1000)
                            const slot = `${thing.getHours()}:${thing.getMinutes() < 10 ? "0" : ""}${thing.getMinutes()}`
                            tempSlots.push(slot)
                        }
                    } else {
                        const thing = new Date(tStart1 * 1000)
                        const slot = `${thing.getHours()}:${thing.getMinutes() < 10 ? "0" : ""}${thing.getMinutes()}`
                        tempSlots.push(slot)
                    }
                    console.log("------")
                }
                setSlots(tempSlots)
            }
        }
    }
    const chooseSlot = (slot) => {
        const hours = parseInt(slot.split(":")[0])
        const minutes = parseInt(slot.split(":")[1])

        const date = chosenDate.setHours(hours, minutes, 0, 0)
        const dayOfWeek = getDayOfWeek_Word(chosenDate.getDay())
        const month = getMonth_Word(new Date(date).getMonth() + 1)
        const day = new Date(date).getDate()
        const year = new Date(date).getFullYear()
        const slotInfo = {
            Slot: slot,
            Date: date,
            DayOfWeek: dayOfWeek,
            Service: chosenService.Type,
            Duration: chosenService.Duration,
            Month: month,
            Day: day,
            Year: year
        }
        setChosenSlotInfo(slotInfo)
        setShowDetails(true)
        console.log(slotInfo)
    }
    const sendConfirmation = () => {
        dispatch(setLoadingState(true))
        const name = document.querySelector('#tbName').value
        const email = document.querySelector('#tbEmail').value
        const start = chosenSlotInfo.Date / 1000
        const end = parseInt(chosenSlotInfo.Date / 1000) + (chosenService.Duration * 60)

        if (name != "" && email != "") {
            const args = {
                Name: name,
                End: end,
                Start: start,
                Email: email,
                Type: chosenSlotInfo.Service,

            }
            var templateParams = {
                from_name: c_businessName,
                to_name: name,
                date_string: `${chosenSlotInfo.DayOfWeek}, ${chosenSlotInfo.Month} ${chosenSlotInfo.Day} ${chosenSlotInfo.Year} @ ${chosenSlotInfo.Slot}`,
                to_email: email,
                message: emailjs_schedule_message,
                from_email: emailjs_fromEmail,
                reply_to: emailjs_fromEmail
            };
            const myParams = {
                from_name: c_businessName,
                to_name: name,
                date_string: `${chosenSlotInfo.DayOfWeek}, ${chosenSlotInfo.Month} ${chosenSlotInfo.Day} ${chosenSlotInfo.Year} @ ${chosenSlotInfo.Slot}`,
                to_email: emailjs_fromEmail,
                message: "Confirmation has been sent to the customer.",
                from_email: email,
                reply_to: email
            }

            createScheduledEvent(args, templateParams, myParams)
                .then(() => {
                    dispatch(setLoadingState(false))
                    dispatch(setSuccessState(true))
                    setTimeout(() => {
                        dispatch(setSuccessState(false))
                        setShowModal(true)
                        setTimeout(() => {
                            setShowModal(false)
                            window.location.reload(false);
                        }, 4000);
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setFailureState(true))
                    dispatch(setLoadingState(false))
                    setTimeout(() => {
                        dispatch(setFailureState(false))
                    }, 3000);
                })

        } else {
            dispatch(setLoadingState(false))
        }

    }

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Schedule", Views: 0 })
        getEventTypes(dispatch)
        console.log(chosenDate)
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Schedule | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Schedule | Happy Code Template" />
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
            <div className="schedule font1">
                <h1 className='page-title'>Schedule</h1>
                <br />
                {
                    showDetails ?
                        <div className='schedule-rev font1 color1'>
                            <div className='schedule-rev-wrap bg2'>
                                <div className='separate'>
                                    <h1>Before you confirm...</h1>
                                    <HiXMark onClick={() => {
                                        setShowDetails(false)
                                    }} className="schedule-rev-icon" />
                                </div>
                                <p>We would like to get some information from you so that we know who is scheduling and where to send the confirmation to.</p>
                                <br />
                                <h2 className='schedule-rev-date'>{chosenSlotInfo.DayOfWeek}, {chosenSlotInfo.Month} {chosenSlotInfo.Day} {chosenSlotInfo.Year}<br /> @ {chosenSlotInfo.Slot}</h2>
                                <h3 className='schedule-rev-details'>{chosenSlotInfo.Service} - {chosenSlotInfo.Duration} minutes</h3>
                                <br />
                                <div className='schedule-rev-pair'>
                                    <label>Name</label>
                                    <input className='schedule-input border2' id="tbName" type="text" placeholder='John Doe' />
                                </div>
                                <br />
                                <div className='schedule-rev-pair'>
                                    <label>Email</label>
                                    <input className='schedule-input border2' id="tbEmail" type="email" placeholder='jdoe@happy.com' />
                                </div>
                                <button onClick={() => { sendConfirmation() }} className='schedule-rev-btn no-border bg1 color2'>Confirm Date/Time</button>
                            </div>
                        </div> : <div></div>
                }
                {
                    showModal ?
                        <Modal heading="Appointment Confirmed" text="An email will be sent shortly with all details of your appointment. Thank you." /> : <div></div>
                }
                <div className='schedule-wrap'>
                    <div className='schedule-left'>
                        <div>
                            <h2 className='schedule-pick'>Pick a day:</h2>
                            <input type="date" className="schedule-pick-date border2" id="dpDay" onChange={getDate} />
                        </div>
                        {
                            chosenDate != "" ?
                                <div>
                                    <h2 className='schedule-pick'>Pick a Service:</h2>
                                    <select id="ddType" className='schedule-pick-dd border2'>
                                        <option>Select one</option>
                                        {
                                            types.map((type, i) => {
                                                return (
                                                    <option key={i}>{type.Type} ~ {type.Duration} min</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div> : <div></div>
                        }
                        {
                            chosenService.Type != undefined ?
                                <p className='type-desc bg3 color1'>{chosenService.Desc}</p> : <div></div>
                        }
                        <button className='schedule-pick-btn bg1 color2 no-border' onClick={getAvailableTimes}>Get Available Times</button>
                    </div>
                    <div className='schedule-right'>
                        {
                            slots.map((slot, i) => {
                                return (
                                    <div className='schedule-slot' key={i}>
                                        <button onClick={() => { chooseSlot(slot) }} className='border2 no-bg color3'>{slot}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom' style={chosenService.Type == undefined ? { position: "absolute", bottom: "0", right: "0", left: "0" } : {}}>
                <Footer />
            </div>
        </div>
    )
}
