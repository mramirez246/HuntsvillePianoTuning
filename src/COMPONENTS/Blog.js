import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// 
import '../STYLESHEETS/Blog.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../PHOTOS/blog.jpg'
// 
import { setBlogPostState } from '../REDUX/SLICES/BlogPostSlice'
import { useDispatch } from 'react-redux'
import { firebaseGetPageViews } from '../FIREBASE/firebase'

export default function Blog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const testBlogs = [
        {
            id: 0,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 1,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 2,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 3,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 4,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 5,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        },
        {
            id: 6,
            Date: "January 21, 2023",
            Title: "Everything Bagel is within the bagel. Dont you agree?",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.",
            ImgPath: img1,
            Author: "Master Bagel Jr.",
            Tags: "Everything,Plain,Poppy"
        }
    ]
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
    const [firstBlog, setFirstBlog] = useState({})

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        setFirstBlog(testBlogs[0])
        testBlogs.shift()
        firebaseGetPageViews({ Name: "Blog", Views: 0 })
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
            <div className="blog font1">
                <h1 className='page-title'>Blog</h1>
                <div className='blog-wrap'>
                    <div className='blog-left'>
                        <div className='first-blog-block' onClick={() => {
                            dispatch(setBlogPostState(firstBlog));
                            navigate('/blogpost')
                        }}>
                            <img src={firstBlog.ImgPath} className="first-blog-img" />
                            <div className='first-blog-text'>
                                <p className='first-blog-date'>{firstBlog.Date}</p>
                                <h1 className='first-blog-title'>{firstBlog.Title}</h1>
                                <p className='first-blog-desc'>{firstBlog.Desc}</p>
                                <div className='first-blog-tags'>
                                    {/* {
                                        firstBlog.Tags.length > 0 ?
                                            firstBlog.Tags.split(",").map((tag, j) => {
                                                return (
                                                    <p key={j} className='first-blog-tag border2'>{tag}</p>
                                                )
                                            }) : <div></div>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-right'>
                        {
                            testBlogs.map((blog, i) => {
                                return (
                                    <div key={i} className='blog-block' onClick={() => {
                                        dispatch(setBlogPostState(blog));
                                        navigate('/blogpost')
                                    }}>
                                        <img src={blog.ImgPath} className="blog-img" />
                                        <div className='blog-text'>
                                            <p className='blog-date'>{blog.Date}</p>
                                            <h1 className='blog-title'>{blog.Title}</h1>
                                            <p className='blog-desc'>{blog.Desc}</p>
                                            <div className='blog-tags'>
                                                {/* {
                                                        blog.Tags.split(",").map((tag, j) => {
                                                            return (
                                                                <p key={j} className='blog-tag border2'>{tag}</p>
                                                            )
                                                        })
                                                    } */}
                                            </div>
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
