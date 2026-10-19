import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landingpage/home/homePage';
import Signup from './landingpage/signup/signUp';
import About from './landingpage/about/aboutPage';
import Product from './landingpage/products/productsPage';
import Pricing from './landingpage/pricing/pricingPage';
import Support from './landingpage/support/supportPage';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/footer';
import Notfound from './landingpage/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
       <Route path="*" element={<Notfound />} />
     
    </Routes>
    <Footer/>
  </BrowserRouter>
);

