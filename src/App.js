import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Android from './components/features/Android';
import Sql from './components/features/Sql';
import Career from './components/pages/Career';
import Mern from './components/features/Mern';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <React.Fragment>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sql-development" element={<Sql />} />
        <Route path="/mern-development" element={<Mern />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-consitions" element={<Terms />} />
        <Route path="/android-development" element={<Android />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App;