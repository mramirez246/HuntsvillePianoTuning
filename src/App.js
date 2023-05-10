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
          c_routes.home != undefined ? <Route exact path="/" element={<Home />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.hometwo != undefined ? <Route exact path="/" element={<Home2 />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.homethree != undefined ? <Route exact path="/" element={<Home3 />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.homefour != undefined ? <Route exact path="/" element={<Home4 />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.homefive != undefined ? <Route exact path="/" element={<Home5 />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.homesix != undefined ? <Route exact path="/" element={<Home6 />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.about != undefined ? <Route exact path="/about" element={<About />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.services != undefined ? <Route exact path="/services" element={<Services />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.products != undefined ? <Route exact path="/products" element={<Products />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.pricing != undefined ? <Route exact path="/pricing" element={<Pricing />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.bio != undefined ? <Route exact path="/bio" element={<Bio />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.contact != undefined ? <Route exact path="/contact" element={<Contact />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.history != undefined ? <Route exact path="/history" element={<History />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.locations != undefined ? <Route exact path="/locations" element={<Locations />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.gallery != undefined ? <Route exact path="/gallery" element={<Gallery />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.galleryphoto != undefined ? <Route exact path="/galleryphoto" element={<GalleryPhoto />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.mailinglist != undefined ? <Route exact path="/mailinglist" element={<MailingList />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.blog != undefined ? <Route exact path="/blog" element={<Blog />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.blogpost != undefined ? <Route exact path="/blogpost" element={<BlogPost />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.events != undefined ? <Route exact path="/events" element={<Events />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.faq != undefined ? <Route exact path="/faq" element={<FAQ />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.careers != undefined ? <Route exact path="/careers" element={<Careers />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.shop != undefined ? <Route exact path="/shop" element={<Shop />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.schedule != undefined ? <Route exact path="/schedule" element={<Schedule />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.scheduleadmin != undefined ? <Route exact path="/scheduleadmin" element={<ScheduleAdmin />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.partners != undefined ? <Route exact path="/partners" element={<Partners />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.form != undefined ? <Route exact path="/form" element={<Form />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.features != undefined ? <Route exact path="/features" element={<Features />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.portfolio != undefined ? <Route exact path="/portfolio" element={<Portfolio />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.menu != undefined ? <Route exact path="/menu" element={<Menu />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.team != undefined ? <Route exact path="/team" element={<Team />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.awards != undefined ? <Route exact path="/awards" element={<Awards />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.coupons != undefined ? <Route exact path="/coupons" element={<Coupons />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.quote != undefined ? <Route exact path="/quote" element={<Quote />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.reviews != undefined ? <Route exact path="/reviews" element={<Reviews />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.tutorials != undefined ? <Route exact path="/tutorials" element={<Tutorials />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.employeelogin != undefined ? <Route exact path="/employeelogin" element={<EmployeeLogin />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.employeedashboard != undefined ? <Route exact path="/employeedashboard" element={<EmployeeDashboard />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.timecardadmin != undefined ? <Route exact path="/timecardadmin" element={<TimecardAdmin />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.login != undefined ? <Route exact path="/login" element={<Login />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.dashboard != undefined ? <Route exact path="/dashboard" element={<Dashboard />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.shopadmin != undefined ? <Route exact path="/shopadmin" element={<ShopAdmin />} /> : <Route exact path="/" element={<Home />} />
        }
        {
          c_routes.landing != undefined ? <Route exact path="/landing" element={<Landing />} /> : <Route exact path="/" element={<Home />} />
        }
        
        

        {/* <Route exact path="/timecard" element={<Timecard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
