import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/ShopAdmin.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseCreateAppointmentType, firebaseGetPageViews, getEventTypes, getItemsbyOrder, getOrders, markOrderAsComplete } from '../FIREBASE/firebase'
import { useDispatch, useSelector } from 'react-redux'
import DashNavigation from './UTILITIES/DashNavigation'
import { doc } from 'firebase/firestore'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'
import { setSuccessState } from '../REDUX/SLICES/SuccessSlice'
import { setFailureState } from '../REDUX/SLICES/FailureSlice'
import { HiXMark } from 'react-icons/hi2'
// 
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function ScheduleAdmin() {
    const dashUser = useSelector((state) => state.dashUser.value)
    const orders = useSelector((state) => state.orders.value)
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

    const [tempOrders, setTempOrders] = useState([])
    const [tempCompletedOrders, setTempCompletedOrders] = useState([])
    const [tempItems, setTempItems] = useState([])
    const [chosenOrderID, setChosenOrderID] = useState("")
    const [toggleCompleted, setToggleCompleted] = useState(false)

    const completeOrder = () => {
        dispatch(setLoadingState(true))
        markOrderAsComplete(chosenOrderID, setTempOrders, tempOrders, setTempCompletedOrders, tempCompletedOrders)
            .then(() => {
                dispatch(setLoadingState(false))
                dispatch(setSuccessState(true))
                setTimeout(() => {
                    dispatch(setSuccessState(false))
                }, 1000);
            })
            .catch((error) => {
                console.log(error)
                dispatch(setLoadingState(false))
                dispatch(setFailureState(true))
                setTimeout(() => {
                    dispatch(setFailureState(false))
                }, 1000);
            })
    }

    useEffect(() => {
        if (dashUser.Email == undefined) {
            navigate("/login")
        }
        window.scrollTo(0, 0)
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "ShopAdmin", Views: 0 })
        getOrders(setTempOrders, setTempCompletedOrders)
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

            <div className='padding font1'>
                <div className='relative'>
                    <h1 className='page-title-sm'>Orders</h1>
                    <br />
                    <div className='orders-btns'>
                        <button onClick={() => { setToggleCompleted(false) }} className={`border-bottom1 ${!toggleCompleted ? "bg1 color2" : "no-bg color1"}`}>New Orders</button>
                        <button onClick={() => { setToggleCompleted(true) }} className={`border-bottom1 ${toggleCompleted ? "bg1 color2" : "no-bg color1"}`}>Completed Orders</button>
                    </div>
                    <br />
                    {
                        toggleCompleted ?
                            <div className='orders'>
                                {
                                    tempCompletedOrders.map((order, i) => {
                                        return (
                                            <div onClick={() => {
                                                chosenOrderID == order.id ?
                                                    setChosenOrderID("") :
                                                    getItemsbyOrder(order.id, setTempItems);
                                                setChosenOrderID(order.id);
                                            }} className='border2 padding order' key={i}>
                                                <div className='separate'>
                                                    <div>
                                                        <h1>{order.id.toUpperCase()}</h1>
                                                        <p className='color3'>{order.Date}</p>
                                                    </div>
                                                    {
                                                        order.id == chosenOrderID ? <IoIosArrowUp className='orders-icon' /> : <IoIosArrowDown className='orders-icon' />
                                                    }
                                                </div>
                                                {
                                                    order.id == chosenOrderID ?
                                                        <div className='items'>
                                                            {
                                                                tempItems.map((item, j) => {
                                                                    return (
                                                                        <div className='item' key={j}>
                                                                            <div className='separate'>
                                                                                <h1>{item.Name}</h1>
                                                                                <h3>x{item.Quantity}</h3>
                                                                            </div>
                                                                            <p className='color3'>{item.Desc}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div> : <div></div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div> :
                            <div className='orders'>
                                {
                                    tempOrders.map((order, i) => {
                                        return (
                                            <div onClick={() => {
                                                chosenOrderID == order.id ?
                                                    setChosenOrderID("") :
                                                    getItemsbyOrder(order.id, setTempItems);
                                                setChosenOrderID(order.id);
                                            }} className='border2 padding order' key={i}>
                                                <div className='separate'>
                                                    <div>
                                                        <h1>{order.id.toUpperCase()}</h1>
                                                        <p className='color3'>{order.Date}</p>
                                                    </div>
                                                    {
                                                        order.id == chosenOrderID ? <IoIosArrowUp className='orders-icon' /> : <IoIosArrowDown className='orders-icon' />
                                                    }
                                                </div>
                                                {
                                                    order.id == chosenOrderID ?
                                                        <div className='items'>
                                                            {
                                                                tempItems.map((item, j) => {
                                                                    return (
                                                                        <div className='item' key={j}>
                                                                            <div className='separate'>
                                                                                <h1>{item.Name}</h1>
                                                                                <h3>x{item.Quantity}</h3>
                                                                            </div>
                                                                            <p className='color3'>{item.Desc}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div> : <div></div>
                                                }
                                                {
                                                    order.id == chosenOrderID ?
                                                        <button onClick={() => { completeOrder() }} className='order-btn bg1 color2 no-border'><span className='order-btn-text'>Mark As Complete</span><AiOutlineCheckCircle className='order-btn-icon' /></button> : <div></div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
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
