import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// 
import Failure from './COMPONENTS/UTILITIES/Failure';
import Loading from './COMPONENTS/UTILITIES/Loading';
import Success from './COMPONENTS/UTILITIES/Success';
// 

import About from './COMPONENTS/About';
import Bio from './COMPONENTS/Bio';
import Contact from './COMPONENTS/Contact';
import History from './COMPONENTS/History';
import Locations from './COMPONENTS/Locations'
import Home from './COMPONENTS/Home.js'
import Home2 from './COMPONENTS/Home2.js'
import Home3 from './COMPONENTS/Home3.js'
import Home4 from './COMPONENTS/Home4.js'
import Home5 from './COMPONENTS/Home5'
import Home6 from './COMPONENTS/Home6'
import Pricing from './COMPONENTS/Pricing';
import Products from './COMPONENTS/Products';
import Services from './COMPONENTS/Services';
import Gallery from './COMPONENTS/Gallery';
import GalleryPhoto from './COMPONENTS/GalleryPhoto'
import MailingList from './COMPONENTS/MailingList';
import Blog from './COMPONENTS/Blog';
import BlogPost from './COMPONENTS/BlogPost';
import Events from './COMPONENTS/Events';
import FAQ from './COMPONENTS/FAQ';
import Careers from './COMPONENTS/Careers';
import Shop from './COMPONENTS/Shop';
import Login from './COMPONENTS/Login';
import Dashboard from './COMPONENTS/Dashboard'
import Schedule from './COMPONENTS/Schedule';
import Landing from './COMPONENTS/Landing';
import ScheduleAdmin from './COMPONENTS/ScheduleAdmin';
import Partners from './COMPONENTS/Partners';
import Form from './COMPONENTS/Form';
import Features from './COMPONENTS/Features';
import Portfolio from './COMPONENTS/Portfolio';
import Menu from './COMPONENTS/Menu';
import Team from './COMPONENTS/Team';
import EmployeeLogin from './COMPONENTS/EmployeeLogin'
import EmployeeDashboard from './COMPONENTS/EmployeeDashboard'
import TimecardAdmin from './COMPONENTS/TimecardAdmin';
import Awards from './COMPONENTS/Awards';
import Coupons from './COMPONENTS/Coupons';
import Quote from './COMPONENTS/Quote';
import Reviews from './COMPONENTS/Reviews';
import Tutorials from './COMPONENTS/Tutorials'
import ShopAdmin from './COMPONENTS/ShopAdmin'
import OrderOnline from './COMPONENTS/OrderOnline'
import OrderOnlineAdmin from './COMPONENTS/OnlineOrderAdmin'

// import Timecard from './COMPONENTS/Timecard'

import { c_routes } from './Constants';



function App() {
  const loading = useSelector((state) => state.loading.value)
  const success = useSelector((state) => state.success.value)
  const failure = useSelector((state) => state.failure.value)
  return (
    <BrowserRouter>
      {
        loading ?
          <Loading /> : <div></div>
      }
      {
        success ?
          <Success /> : <div></div>
      }
      {
        failure ?
          <Failure /> : <div></div>
      }

      <Routes>
        {
          c_routes.home != undefined ? <Route exact path="/" element={<Home />} /> : null
        }
        {
          c_routes.home2 != undefined ? <Route exact path="/" element={<Home2 />} /> : null
        }
        {
          c_routes.home3 != undefined ? <Route exact path="/" element={<Home3 />} /> : null
        }
        {
          c_routes.home4 != undefined ? <Route exact path="/" element={<Home4 />} /> : null
        }
        {
          c_routes.home5 != undefined ? <Route exact path="/" element={<Home5 />} /> : null
        }
        {
          c_routes.home6 != undefined ? <Route exact path="/" element={<Home6 />} /> : null
        }
        {
          c_routes.about != undefined ? <Route exact path="/about" element={<About />} /> : null
        }
        {
          c_routes.services != undefined ? <Route exact path="/services" element={<Services />} /> : null
        }
        {
          c_routes.products != undefined ? <Route exact path="/products" element={<Products />} /> : null
        }
        {
          c_routes.pricing != undefined ? <Route exact path="/pricing" element={<Pricing />} /> : null
        }
        {
          c_routes.bio != undefined ? <Route exact path="/bio" element={<Bio />} /> : null
        }
        {
          c_routes.contact != undefined ? <Route exact path="/contact" element={<Contact />} /> : null
        }
        {
          c_routes.history != undefined ? <Route exact path="/history" element={<History />} /> : null
        }
        {
          c_routes.locations != undefined ? <Route exact path="/locations" element={<Locations />} /> : null
        }
        {
          c_routes.gallery != undefined ? <Route exact path="/gallery" element={<Gallery />} /> : null
        }
        {
          c_routes.galleryphoto != undefined ? <Route exact path="/galleryphoto" element={<GalleryPhoto />} /> : null
        }
        {
          c_routes.mailinglist != undefined ? <Route exact path="/mailinglist" element={<MailingList />} /> : null
        }
        {
          c_routes.blog != undefined ? <Route exact path="/blog" element={<Blog />} /> : null
        }
        {
          c_routes.blogpost != undefined ? <Route exact path="/blogpost" element={<BlogPost />} /> : null
        }
        {
          c_routes.events != undefined ? <Route exact path="/events" element={<Events />} /> : null
        }
        {
          c_routes.faq != undefined ? <Route exact path="/faq" element={<FAQ />} /> : null
        }
        {
          c_routes.careers != undefined ? <Route exact path="/careers" element={<Careers />} /> : null
        }
        {
          c_routes.shop != undefined ? <Route exact path="/shop" element={<Shop />} /> : null
        }
        {
          c_routes.schedule != undefined ? <Route exact path="/schedule" element={<Schedule />} /> : null
        }
        {
          c_routes.scheduleadmin != undefined ? <Route exact path="/scheduleadmin" element={<ScheduleAdmin />} /> : null
        }
        {
          c_routes.partners != undefined ? <Route exact path="/partners" element={<Partners />} /> : null
        }
        {
          c_routes.form != undefined ? <Route exact path="/form" element={<Form />} /> : null
        }
        {
          c_routes.features != undefined ? <Route exact path="/features" element={<Features />} /> : null
        }
        {
          c_routes.portfolio != undefined ? <Route exact path="/portfolio" element={<Portfolio />} /> : null
        }
        {
          c_routes.menu != undefined ? <Route exact path="/menu" element={<Menu />} /> : null
        }
        {
          c_routes.team != undefined ? <Route exact path="/team" element={<Team />} /> : null
        }
        {
          c_routes.awards != undefined ? <Route exact path="/awards" element={<Awards />} /> : null
        }
        {
          c_routes.coupons != undefined ? <Route exact path="/coupons" element={<Coupons />} /> : null
        }
        {
          c_routes.quote != undefined ? <Route exact path="/quote" element={<Quote />} /> : null
        }
        {
          c_routes.reviews != undefined ? <Route exact path="/reviews" element={<Reviews />} /> : null
        }
        {
          c_routes.tutorials != undefined ? <Route exact path="/tutorials" element={<Tutorials />} /> : null
        }
        {
          c_routes.employeelogin != undefined ? <Route exact path="/employeelogin" element={<EmployeeLogin />} /> : null
        }
        {
          c_routes.employeedashboard != undefined ? <Route exact path="/employeedashboard" element={<EmployeeDashboard />} /> : null
        }
        {
          c_routes.timecardadmin != undefined ? <Route exact path="/timecardadmin" element={<TimecardAdmin />} /> : null
        }
        {
          c_routes.login != undefined ? <Route exact path="/login" element={<Login />} /> : null
        }
        {
          c_routes.dashboard != undefined ? <Route exact path="/dashboard" element={<Dashboard />} /> : null
        }
        {
          c_routes.shopadmin != undefined ? <Route exact path="/shopadmin" element={<ShopAdmin />} /> : null
        }
        {
          c_routes.landing != undefined ? <Route exact path="/landing" element={<Landing />} /> : null
        }
        {
          c_routes.orderonline != undefined ? <Route exact path="/orderonline" element={<OrderOnline />} /> : null
        }
        {
          c_routes.orderonlineadmin != undefined ? <Route exact path="/orderonlineadmin" element={<OrderOnlineAdmin />} /> : null
        }
        
        <Route exact path="/home2" element={<Home2 />} />
        <Route exact path="/home3" element={<Home3 />} />
        <Route exact path="/home4" element={<Home4 />} />
        <Route exact path="/home5" element={<Home5 />} />
        <Route exact path="/home6" element={<Home6 />} />

        {/* <Route exact path="/timecard" element={<Timecard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
