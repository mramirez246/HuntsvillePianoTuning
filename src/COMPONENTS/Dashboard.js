import React, { useEffect } from 'react'
// 
import '../STYLESHEETS/Dashboard.css'
import logo from '../PHOTOS/stock.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dashGetContactEntries, dashGetPageViews, firebaseSignOut } from '../FIREBASE/firebase'
import { HiEye } from 'react-icons/hi'
import { setLoadingState } from '../REDUX/SLICES/LoadingSlice'

export default function About() {
    const dashUser = useSelector((state) => state.dashUser.value)
    const pageViewPages = useSelector((state) => state.pageViews.value)
    const contactEntries = useSelector((state) => state.contactEntries.value)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (dashUser.Email == undefined) {
            navigate("/login")
        }
        window.scrollTo(0, 0)
        dashGetPageViews(dispatch)
        dashGetContactEntries(dispatch)
        dispatch(setLoadingState(false))
    }, [])
    return (
        <div className='main font1'>
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <button onClick={() => { firebaseSignOut(dispatch); navigate('/login') }} className='dash-out no-border color2'>Sign Out</button>
            </div>
            <div className='dashboard'>
                <h1 className='page-title-sm dashboard-head'>Dashboard</h1>
                <div className='dashboard-wrap'>
                    {/* COMPONENTS */}
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
                                                <HiEye color="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </span>
                    <span className='dash-comp col3 bg2'>
                        <h1>Contact Entries</h1>
                        <p className='dash-comp-desc'>These are the entries that are submitted by your users. All entries are filtered by Date.</p>
                        <table className='dash-contact-table'>
                            <tr>
                                <th className='bg1 color2'>Name</th>
                                <th className='bg1 color2'>Email</th>
                                <th className='bg1 color2'>Reason</th>
                                <th className='bg1 color2 dash-contact-msg'>Message</th>
                            </tr>
                            {
                                contactEntries.map((entry, i) => {
                                    return (
                                        <tr key={i} className="">
                                            <td>{entry.Name}</td>
                                            <td>{entry.Email}</td>
                                            <td>{entry.Reason}</td>
                                            <td className='dash-contact-msg'>{entry.Message}</td>
                                        </tr>
                                    )
                                })
                            }

                        </table>

                    </span>
                </div>
            </div>

        </div>
    )
}
