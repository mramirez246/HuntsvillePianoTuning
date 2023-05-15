import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

// 

const c_businessType = "Happy Code"
// 
export const c_businessName = "Happy Code LLC"
export const c_businessCityState = "San Diego, CA"
export const c_businessDesc = `${c_businessType == "Happy Code" ?
    "Happy Code is a web development company that creates beautiful and fully functional websites using the latest technologies and tools. Our experienced team focuses on user experience design and works closely with clients to deliver fast, reliable, and scalable websites. From simple brochure websites to complex e-commerce platforms, Happy Code has the expertise to exceed expectations." :
    c_businessType == "Barber Shop" ?
        `${c_businessName} is your go-to destination for a top-notch haircut and grooming experience. Our skilled barbers provide a variety of services, including haircuts, beard trims, shaves, and more. With a welcoming atmosphere and friendly staff, we strive to make your visit to ${c_businessName} an enjoyable one. Our shop is conveniently located and easily accessible, so you can always fit in a quick trim or full grooming session into your busy schedule. Trust us to leave you looking and feeling your best. Visit ${c_businessName} today for an exceptional grooming experience that will leave you looking sharp and feeling confident.` :
        c_businessType == "Hair Salon" ?
            `${c_businessName} is your ultimate destination for exceptional hair care services. Our experienced stylists are committed to delivering the latest hair trends, personalized advice, and top-notch haircuts, colors, and styling. Using only the highest quality products, we strive to achieve the perfect look for you while providing a relaxing and welcoming environment. Conveniently located and easily accessible, our salon is the perfect choice for anyone looking for a professional and enjoyable hair care experience.` :
            c_businessType == "Nail Salon" ?
                `Welcome to ${c_businessName}, your go-to destination for exceptional nail care services. Our experienced and talented technicians offer a variety of services, including manicures, pedicures, acrylics, gels, and more. Using only the highest quality products and tools, we strive to provide a relaxing and enjoyable experience while achieving the perfect look for you. Conveniently located and easily accessible, ${c_businessName} is the ultimate choice for anyone looking for top-notch nail care services.` :
                c_businessType == "Massage Parlor" ?
                    `Welcome to ${c_businessName}, where we provide exceptional massage services that will leave you feeling relaxed and rejuvenated. Our experienced and certified massage therapists offer a variety of services, including Swedish, deep tissue, hot stone, and more. Using only the highest quality oils and lotions, we strive to provide a personalized and enjoyable experience that meets your individual needs. Conveniently located and easily accessible, ${c_businessName} is the perfect choice for anyone looking for a top-notch massage experience.` :
                    c_businessType == "Tattoo Parlor" ?
                        `Welcome to ${c_businessName}, where we provide exceptional tattoo services that will leave you with a work of art that you can be proud of. Our skilled and experienced artists offer a wide range of tattoo styles, including traditional, new school, realism, and more. Using only the highest quality ink and equipment, we strive to provide a clean, safe, and welcoming environment for your tattoo experience. Conveniently located and easily accessible, ${c_businessName} is the ultimate choice for anyone looking for a professional and enjoyable tattoo experience.` :
                        c_businessType == "Coffee Shop" ?
                            `Welcome to ${c_businessName}, where we offer exceptional coffee and baked goods that will satisfy your cravings. Our premium coffee beans are carefully selected and roasted to perfection, creating a delicious and aromatic coffee experience. In addition to our coffee, we offer a variety of fresh baked goods, sandwiches, and salads to suit any taste. Conveniently located and easily accessible, ${c_businessName} is the perfect destination for anyone looking for a cozy and welcoming place to enjoy their coffee and treats.` :
                            ""
    }`
// 
export const c_meta_title = `${c_businessType == "Happy Code" ?
    `${c_businessName} | ${c_businessCityState} | Happy Code Template` :
    c_businessType == "Barber Shop" ?
        `${c_businessName} | ${c_businessCityState} | Top-Notch Haircuts and Grooming Services` :
        c_businessType == "Hair Salon" ?
            `${c_businessName} | ${c_businessCityState} | Beautiful Haircuts, Styling and Coloring Services` :
            c_businessType == "Nail Salon" ?
                `${c_businessName} | ${c_businessCityState} | High-Quality Nail Care and Styling Services` :
                c_businessType == "Massage Parlor" ?
                    `${c_businessName} | ${c_businessCityState} | Relaxing and Rejuvenating Massage Services` :
                    c_businessType == "Tattoo Parlor" ?
                        `${c_businessName} | ${c_businessCityState} | Custom Tattoos and Piercings by Expert Artists` :
                        c_businessType == "Coffee Shop" ?
                            `${c_businessName} | ${c_businessCityState} | Best Coffee and Pastries in Town` :
                            ""
    }`
export const c_meta_desc = `${c_businessType == "Happy Code" ?
    "Happy Code is a top-rated web development company that specializes in creating professional websites for small businesses. Our services are affordable, and we offer great maintenance benefits to ensure your website stays up-to-date and secure. Contact us today to learn more about our services and how we can help your business grow online." :
    c_businessType == "Barber Shop" ?
        `Looking for a professional and reliable barbershop in ${c_businessCityState}? Look no further than our expert team at ${c_businessName}! Our skilled barbers offer a wide range of grooming services, including haircuts, shaves, and beard trims. Book your appointment today for a great experience!` :
        c_businessType == "Hair Salon" ?
            `Get the perfect haircut and style at our hair salon in ${c_businessCityState}. Our expert hairstylists are trained in the latest techniques and trends, ensuring that you leave our salon looking and feeling your best. Whether you need a trim or a complete makeover, we've got you covered. Book your appointment today!` :
            c_businessType == "Nail Salon" ?
                `Treat yourself to a relaxing and rejuvenating nail salon experience in ${c_businessCityState}. Our skilled technicians offer a range of nail services, including manicures, pedicures, and nail art. We use only the highest quality products to ensure that your nails look their best. Book your appointment today and enjoy a luxurious spa experience!` :
                c_businessType == "Massage Parlor" ?
                    `Relax and unwind at our massage parlor in ${c_businessCityState}. Our skilled therapists offer a range of massage services, including Swedish, deep tissue, and hot stone massages. Whether you need to relieve stress, ease muscle tension, or simply indulge in some self-care, we've got you covered. Book your appointment today and experience the ultimate in relaxation and rejuvenation!` :
                    c_businessType == "Tattoo Parlor" ?
                        `Express yourself with a stunning tattoo from our tattoo parlor in ${c_businessCityState}. Our talented artists specialize in a variety of tattoo styles, including traditional, black and grey, and color. Whether you want a small, meaningful design or a full sleeve, we'll work with you to bring your vision to life. Book your consultation today and let us help you create a work of art that you'll love for a lifetime!` :
                        c_businessType == "Coffee Shop" ?
                            `Get your caffeine fix at our cozy coffee shop in ${c_businessCityState}. Our expert baristas use only the finest beans to create delicious, handcrafted coffee drinks that will keep you coming back for more. Whether you prefer a classic latte, a bold espresso, or a creamy cappuccino, we've got you covered. Stop by today and treat yourself to a truly exceptional coffee experience!` :
                            ""
    }`

// 
export const c_helmet = (page, routeDesc) => {
    return (
        <Helmet>
            <title>{page} | {c_meta_title}</title>
            <meta name="description" content={routeDesc} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`${c_mainURL}`} />
            <meta property="og:title" content={`${page} | ${c_meta_title}`} />
            <meta property="og:description" content={c_meta_desc} />
            <meta property="og:url" content={`${c_mainURL}`} />
            <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/stock.png`} />
        </Helmet>
    )
}
export const c_nav = (showOptions, setShowOptions) => {
    return (
        <div className='nav-links font1'>
            <div className="separate">
                <Link className='nav-link color1' to="/about">About</Link>
                {
                    showOptions ?
                    <FiChevronUp className="nav-icon" onClick={() => {setShowOptions(false)}} /> :
                    <FiChevronDown className="nav-icon" onClick={() => {setShowOptions(true)}} />
                }
            </div>

            {
                showOptions ?
                    <div className="nav-link-opts">
                        <Link className='nav-link-opt color1' to="/">Bagel Option 1</Link>
                        <Link className='nav-link-opt color1' to="/">Bagel Option 2</Link>
                        <Link className='nav-link-opt color1' to="/">Bagel Option 3</Link>
                        <Link className='nav-link-opt color1' to="/">Bagel Option 4</Link>
                    </div> : <div></div>
            }
            <Link className='nav-link color1' to="/gallery">Gallery</Link>
            <Link className='nav-link color1' to="/events">Events</Link>
            <Link className='nav-link color1' to="/blog">Blog</Link>
            <Link className='nav-link color1' to="/contact">Contact Us</Link>
        </div>
    )
}
export const c_footerLinks = () => {
    return (
        <div className='footer-links'>
            <Link className='footer-link color2' to="/">About</Link>
            <Link className='footer-link color2' to="/">Menu</Link>
            <Link className='footer-link color2' to="/">Products</Link>
            <Link className='footer-link color2' to="/">Products</Link>
            <Link className='footer-link color2' to="/">Products</Link>
            <Link className='footer-link color2' to="/">Contact Us</Link>
        </div>
    )
}

export const c_routes =
{
    // "route" : "SEO meta desc"
    "home": "",
    "home2": "",
    "home3": "",
    "home4": "",
    "home5": "",
    "home6": "",
    "about": "",
    "services": "",
    "products": "",
    "pricing": "",
    "bio": "",
    "contact": "",
    "history": "",
    "locations": "",
    "gallery": "",
    "galleryphoto": "",
    "mailinglist": "",
    "blog": "",
    "blogpost": "",
    "events": "",
    "faq": "",
    "careers": "",
    "shop": "",
    "schedule": "",
    "scheduleadmin": "",
    "partners": "",
    "form": "",
    "features": "",
    "portfolio": "",
    "menu": "",
    "team": "",
    "awards": "",
    "coupons": "",
    "quote": "",
    "reviews": "",
    "tutorials": "",
    "employeelogin": "",
    "employeedashboard": "",
    "timecardadmin": "",
    "login": "",
    "dashboard": "",
    "shopadmin": "",
    "landing": "",
    "orderonline":"",
    "orderonlineadmin" : ""
}


// 

export const c_instagram = ""
export const c_facebook = ""
export const c_yelp = ""
export const c_twitter = ""
export const c_logoName = "stock.png"
export const c_mainURL = "https://happy-code-templates.web.app"
// 
export const firebase_configObj = {
    apiKey: "AIzaSyBvFjW_wMjEFE-SESveqdk_U0328bAdFww",
    authDomain: "happy-code-templates.firebaseapp.com",
    projectId: "happy-code-templates",
    storageBucket: "happy-code-templates.appspot.com",
    messagingSenderId: "754511528809",
    appId: "1:754511528809:web:65a693fa61dbb4a6ebf3f8",
    measurementId: "G-R31943N4V6"
}
// 
export const emailjs_publicKey = "eaOYb8X6nqSrLTHBS"
export const emailjs_serviceID = "service_xq1rj6f"
export const emailjs_fromEmail = "happycode.inbox@gmail.com"
// 
export const emailjs_schedule_templateID = "template_65xnt8b"
export const emailjs_mySchedule_templateID = "template_3k7viy5"
export const emailjs_schedule_message = `Thank you for scheduling an appointment with ${c_businessName}. Please make sure to arrive 10 minutes before your confirmed time to not lose your place in line. Otherwise, you can schedule another time for a different date.`
// 
export const emailjs_contact_templateID = "template_6ez9gil"
export const emailjs_myContact_templateID = "template_6v4x43c"
export const emailjs_contact_message = `Your inquiry has been successfully received. A follow up email will be sent shortly.`
// 
export const emailjs_quotes_templateID = "template_b3g78oj"
export const emailjs_myQuotes_templateID = "template_m433xgd"
//
export const emailjs_shop_templateID = "template_xkveshb"
export const emailjs_myShop_templateID = "template_whvwdyo"
// 
export const square_appID = "sandbox-sq0idb-en5EWhNy5BmN4JbNHzXBsw"
export const square_locationID = "LVJYVW6F0ECCC"
export const square_accessToken = "EAAAEBhC-J6P2ZMn9VbKW5vC6vHV-DrgUzb2kiCdQ_lics1OVNNWkfoD473D86iE"

export const stripe_publishableKey = "pk_test_51MajXbKx2glJRMlwXbLVRs6jolz58bvODFBxDGs3QycWHealravrW7E9mszvrw4N85DviRctPEEwGtnFTmlQCTTs00aR6DMzzS"
export const stripe_secretKey = "sk_test_51MajXbKx2glJRMlw9H0xIW3l5STyygi6EuK6oIR7FgO5AnM37cxV4Ve24akw4c4cefORoIzdc48ZoCEVo2cuA6sa00lLrKUEix"