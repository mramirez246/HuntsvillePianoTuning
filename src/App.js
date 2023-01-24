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
import Pricing from './COMPONENTS/Pricing';
import Products from './COMPONENTS/Products';
import Services from './COMPONENTS/Services';
import Gallery from './COMPONENTS/Gallery';
import MailingList from './COMPONENTS/MailingList';
import Blog from './COMPONENTS/Blog';
import BlogPost from './COMPONENTS/BlogPost';
import Events from './COMPONENTS/Events';
import FAQ from './COMPONENTS/FAQ';



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
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/mailinglist" element={<MailingList />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blogpost" element={<BlogPost />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
