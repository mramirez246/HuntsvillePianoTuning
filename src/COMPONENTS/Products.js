import React, { useEffect, useState } from 'react'
// 
import '../STYLESHEETS/Products.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Footer from './UTILITIES/Footer'
import Navigation from './UTILITIES/Navigation'
// 
import logo from '../PHOTOS/stock.png'
import img1 from '../PHOTOS/product.jpg'
import { firebaseGetPageViews } from '../FIREBASE/firebase'

export default function Products() {
    const products = [
        {
            id: 0,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 1,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 2,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 3,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 4,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 5,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 6,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 7,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        },
        {
            id: 8,
            Name: "Everything Bagel",
            Price: 200,
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod.",
            Img: img1
        }
    ]
    const [prod, setProd] = useState({
        id: -1
    })

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
        closeNav()
        window.scrollTo(0, 0)
        firebaseGetPageViews({ Name: "Products", Views: 0 })
    }, [])
    return (
        <div>
            {/* NAGIVATION */}
            <Navigation />
            <div className='top'>
                <Link to="/"><img src={logo} /></Link>
                <RxHamburgerMenu className='top-icon' onClick={openNav} />
            </div>
            {/* BODY */}
            <div className="products font1">
                <h1 className='page-title'>Products</h1>
                <div className='products-wrap'>
                    <div className='products-left'>
                        <p className='products-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus. Phasellus euismod sollicitudin euismod. Morbi porttitor rutrum risus non pharetra. Praesent tincidunt finibus lorem ut euismod.</p>
                        {
                            prod.id >= 0 ?
                                <div id="productDesc" className=' product-desc-wrap border2'>
                                    <h1 className='product-desc-name'>{prod.Name}</h1>
                                    <p className='product-desc'>{prod.Desc}</p>
                                </div> : <div></div>
                        }
                    </div>
                    <div className='products-right'>
                        {
                            products.map((product, i) => {
                                return (
                                    <div key={i} className="product-block border2">
                                        <img src={product.Img} className="product-img" />
                                        <p className='product-name'>{product.Name}</p>
                                        <div className='separate'>
                                            <h4 className='product-price'>${product.Price}</h4>
                                            <a className='product-view color1' href="#productDesc"><p onClick={() => { prod.id != product.id ? setProd(product) : setProd({ id: -1 }) }}>View Info</p></a>
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
        </div >
    )
}
