import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Android from './components/features/Android';
import Ios from './components/features/Ios';
import Career from './components/pages/Career';
import Website from './components/features/Website';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';

const App = () => {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/ios-development" element={<Ios />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/android-development" element={<Android />} />
        <Route path="/website-development" element={<Website />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-consitions" element={<Terms />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App;