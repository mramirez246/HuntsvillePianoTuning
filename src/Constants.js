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
import Awards1 from './COMPONENTS/PAGES/Awards1'
import Coupons1 from './COMPONENTS/PAGES/Coupons1'
import MailingList1 from './COMPONENTS/PAGES/MailingList1'
import Team1 from './COMPONENTS/PAGES/Team1'
import Locations1 from './COMPONENTS/PAGES/Locations1'
import Quote1 from './COMPONENTS/PAGES/Quote1'
import Wedding1 from './COMPONENTS/PAGES/EVENTS/Wedding1'
import Blog1 from './COMPONENTS/PAGES/Blog1'
import Schedule1 from './COMPONENTS/PAGES/Schedule1'

// BUSINESS INFO
export const c_businessName = "Huntsville Piano Tuning"
export const c_businessAddress = ""
export const c_businessPhone = "760-807-1930"
export const c_businessEmail = "huntsvillepianotuning@gmail.com"
export const c_businessDesc = "Welcome to Huntsville Piano Tuning, your premier destination for professional piano tuning services in Huntsville, Alabama as well as the greater Huntsville metropolitan area such as Madison, AL; Athens, AL; Decatur, AL; Hazel Green, AL; Fayetteville, TN; Ardmore, AL; Ardmore, TN; Owens Cross Roads, AL; New Market, AL; Gurley, AL; Guntersville, AL; and Arab, AL. Our expert piano tuner is dedicated to ensuring that your piano sounds its best, delivering exceptional results that bring out the full potential of your instrument. With years of experience and a keen ear for precision, we provide top-notch piano tuning and maintenance solutions tailored to meet your specific needs. Whether you own a grand piano or upright piano, our skilled technician uses state-of-the-art tools and techniques to ensure optimal pitch, tone, and resonance. Experience the joy of playing a perfectly tuned piano by scheduling an appointment with Huntsville Piano Tuning today. Trust us to elevate your musical experience with our unmatched piano tuning expertise. "

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
    },
    {
        Route: "awards",
        Title: `Awards ${c_metaTitleSuffix}`,
        Element: <Awards1 />,
        Desc: ""
    },
    {
        Route: "coupons",
        Title: `Coupons ${c_metaTitleSuffix}`,
        Element: <Coupons1 />,
        Desc: ""
    },
    {
        Route: "mailinglist",
        Title: `Mailing List ${c_metaTitleSuffix}`,
        Element: <MailingList1 />,
        Desc: ""
    },
    {
        Route: "team",
        Title: `Team ${c_metaTitleSuffix}`,
        Element: <Team1 />,
        Desc: ""
    },
    {
        Route: "locations",
        Title: `Locations ${c_metaTitleSuffix}`,
        Element: <Locations1 />,
        Desc: ""
    },
    {
        Route: "quote",
        Title: `Quote ${c_metaTitleSuffix}`,
        Element: <Quote1 />,
        Desc: ""
    },
    {
        Route: "blog",
        Title: `Blog ${c_metaTitleSuffix}`,
        Element: <Blog1 />,
        Desc: ""
    },
    {
        Route: "schedule",
        Title: `Schedule ${c_metaTitleSuffix}`,
        Element: <Schedule1 />,
        Desc: ""
    },
    {
        Route: "wedding",
        Title: `Wedding ${c_metaTitleSuffix}`,
        Element: <Wedding1 />,
        Desc: ""
    }
]
export const c_mainURL = "https://wearehappycode.com"

// CONSTANTS


// FIREBASE
export const firebase_configObj = {
    apiKey: "AIzaSyCX47_4wtf0qCTaL24m0bNmIYn1Zl21Dz4",
  authDomain: "happy-template-v2.firebaseapp.com",
  projectId: "happy-template-v2",
  storageBucket: "happy-template-v2.appspot.com",
  messagingSenderId: "397904119722",
  appId: "1:397904119722:web:9d7f378498234864710dd3",
  measurementId: "G-HJHPCZ7500"
};
