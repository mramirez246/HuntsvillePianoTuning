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
// import Timecard from './COMPONENTS/Timecard'
import EmployeeLogin from './COMPONENTS/EmployeeLogin'
import EmployeeDashboard from './COMPONENTS/EmployeeDashboard'
import TimecardAdmin from './COMPONENTS/TimecardAdmin';
import Awards from './COMPONENTS/Awards';
import Coupons from './COMPONENTS/Coupons';
import Quote from './COMPONENTS/Quote';
import Reviews from './COMPONENTS/Reviews';
import Tutorials from './COMPONENTS/Tutorials'
import ShopAdmin from './COMPONENTS/ShopAdmin'



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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home2" element={<Home2 />} />
        <Route exact path="/home3" element={<Home3 />} />
        <Route exact path="/home4" element={<Home4 />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery-photo" element={<GalleryPhoto />} />
        <Route exact path="/mailinglist" element={<MailingList />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blogpost" element={<BlogPost />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/awards" element={<Awards />} />
        <Route exact path="/coupons" element={<Coupons />} />
        <Route exact path="/quote" element={<Quote />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/tutorials" element={<Tutorials />} />
        {/* <Route exact path="/timecard" element={<Timecard />} /> */}
        <Route exact path="/employee-login" element={<EmployeeLogin />} />
        <Route exact path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/scheduleadmin" element={<ScheduleAdmin />} />
        <Route exact path="/timecardadmin" element={<TimecardAdmin />} />
        <Route exact path="/shopadmin" element={<ShopAdmin />} />
        <Route exact path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
