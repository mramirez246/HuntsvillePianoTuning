// 
import React from 'react'
import { useNavigate } from "react-router"
import Test from './COMPONENTS/PAGES/Test'
import Home1 from './COMPONENTS/PAGES/Home1'
import About1 from './COMPONENTS/PAGES/About1'
import Services1 from './COMPONENTS/PAGES/Services1'
import Contact1 from './COMPONENTS/PAGES/Contact1'
import Gallery1 from './COMPONENTS/PAGES/Gallery1'
import History1 from './COMPONENTS/PAGES/History1'
import Careers1 from './COMPONENTS/PAGES/Careers1'
import Partners1 from './COMPONENTS/PAGES/Partners1'
import Bio1 from './COMPONENTS/PAGES/Bio1'
import Pricing1 from './COMPONENTS/PAGES/Pricing1'
import Features1 from './COMPONENTS/PAGES/Features1'
import Portfolio1 from './COMPONENTS/PAGES/Portfolio1'

// BUSINESS INFO
export const c_businessName = "Happy Code Dev"
export const c_businessAddress = "1024 E 4th St, San Diego CA 91950"
export const c_businessPhone = "123-456-7890"
export const c_businessEmail = "bagel@happycodewebsites.com"
export const c_businessDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "

// META
export const c_metaTitleSuffix = "| The Best Websites in the World!"

// APP INFO
// {"route" : "description"}
export const c_routes = [
    {
        Route: "test",
        Title: `Test ${c_metaTitleSuffix}`,
        Element: <Test />,
        Desc: ""
    },
    {
        Route: "",
        Title: `Home ${c_metaTitleSuffix}`,
        Element: <Home1 />,
        Desc: ""
    },
    {
        Route: "about",
        Title: `About ${c_metaTitleSuffix}`,
        Element: <About1 />,
        Desc: ""
    },
    {
        Route: "services",
        Title: `Services ${c_metaTitleSuffix}`,
        Element: <Services1 />,
        Desc: ""
    },
    {
        Route: "contact",
        Title: `Contact Us ${c_metaTitleSuffix}`,
        Element: <Contact1 />,
        Desc: ""
    },
    {
        Route: "gallery",
        Title: `Gallery ${c_metaTitleSuffix}`,
        Element: <Gallery1 />,
        Desc: ""
    },
    {
        Route: "history",
        Title: `History ${c_metaTitleSuffix}`,
        Element: <History1 />,
        Desc: ""
    },
    {
        Route: "careers",
        Title: `Careers ${c_metaTitleSuffix}`,
        Element: <Careers1 />,
        Desc: ""
    },
    {
        Route: "partners",
        Title: `Partners ${c_metaTitleSuffix}`,
        Element: <Partners1 />,
        Desc: ""
    },
    {
        Route: "bio",
        Title: `Bio ${c_metaTitleSuffix}`,
        Element: <Bio1 />,
        Desc: ""
    },
    {
        Route: "pricing",
        Title: `Pricing ${c_metaTitleSuffix}`,
        Element: <Pricing1 />,
        Desc: ""
    },
    {
        Route: "features",
        Title: `Features ${c_metaTitleSuffix}`,
        Element: <Features1 />,
        Desc: ""
    },
    {
        Route: "portfolio",
        Title: `Portfolio ${c_metaTitleSuffix}`,
        Element: <Portfolio1 />,
        Desc: ""
    }
]
export const c_mainURL = "https://wearehappycode.com"

// CONSTANTS


// FIREBASE
export const firebaseConfig = {
    apiKey: "AIzaSyAOJeLeI5q2rCqbb7JJ6aVbn0Ca_WVb79k",
    authDomain: "happy-template.firebaseapp.com",
    projectId: "happy-template",
    storageBucket: "happy-template.appspot.com",
    messagingSenderId: "196265916042",
    appId: "1:196265916042:web:f019bb6efe377715891f73",
    measurementId: "G-Z0SR6RR4DP"
};
