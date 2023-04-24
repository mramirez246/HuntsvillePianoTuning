import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
// 
import '../STYLESHEETS/Menu.css'
import logo from '../PHOTOS/stock.png'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
import { Link } from 'react-router-dom'
import { firebaseGetPageViews } from '../FIREBASE/firebase'
import { c_mainURL } from '../Constants'
import { Helmet } from 'react-helmet'

export default function Menu() {
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

    const menu = [
        {
            id: 0,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 1,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 4,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 5,
            Category: "Appetizers",
            Prices: [{ Size: "S", Price: "5" }, { Size: "M", Price: "6" }, { Size: "L", Price: "7" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 6,
            Category: "Entrees",
            Prices: [{ Size: "", Price: "10" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 7,
            Category: "Entrees",
            Prices: [{ Size: "", Price: "12" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 8,
            Category: "Entrees",
            Prices: [{ Size: "", Price: "14" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 9,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 10,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 11,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 12,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 13,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 14,
            Category: "Desserts",
            Prices: [{ Size: "", Price: "8" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 15,
            Category: "Beverages",
            Prices: [{ Size: "S", Price: "4" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 16,
            Category: "Beverages",
            Prices: [{ Size: "S", Price: "4" }, { Size: "M", Price: "5" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 17,
            Category: "Beverages",
            Prices: [{ Size: "S", Price: "4" }, { Size: "M", Price: "5" }],
            Name: "Everything Bagel Item",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]
    const [categories, setCategories] = useState([])
    const [chosenCat, setChosenCat] = useState("")

    useEffect(() => {
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Menu", Views: 0 })
        var tempCategs = []
        for (var i in menu) {
            tempCategs.push(menu[i].Category)
        }
        const temp = [...new Set(tempCategs)]
        setCategories(temp)
    }, [])
    return (
        <div className='main'>
            <Helmet>
                <title>Menu | Happy Code Template</title>
                <meta name="description" content="Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." />
                <meta name="keywords" content="web development, small business, low cost, maintenance benefits, Happy Code" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${c_mainURL}`} />
                <meta property="og:title" content="Menu | Happy Code Template" />
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
            <div className="padding font1">
                <h1 className='page-title'>Our Menu</h1>
                <br />
                <div className='menu'>
                    {
                        categories.map((cat, i) => {
                            return (
                                <div key={i} className="">
                                    <h1 className='menu-cat bg4'>{cat}</h1>
                                    <div className='menu-wrap'>
                                        {
                                            menu.map((item, j) => {
                                                if (item.Category == cat) {
                                                    return (
                                                        <div key={j} className='menu-item'>
                                                            <div className='menu-item-top'>
                                                                <div>
                                                                    <h2 className='menu-item-name'>{item.Name}</h2>
                                                                    <p className='menu-item-desc'>{item.Desc}</p>
                                                                </div>
                                                                <div className='menu-item-prices'>
                                                                    {
                                                                        item.Prices.map((price, p) => {
                                                                            return (
                                                                                <div key={p} className='menu-item-price-block'>
                                                                                    <h2 className='menu-item-price'>{price.Price}</h2>
                                                                                    <h2 className='menu-item-size'>{price.Size}</h2>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* FOOTER */}
            <div className='bottom'>
                <Footer />
            </div>
        </div>
    )
}
