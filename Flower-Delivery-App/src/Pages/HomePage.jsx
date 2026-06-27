import React from 'react'
import './App.css';
import Header from './Components/Header';   
import Home from './Components/Home';
import About from './Components/About';
import Icons from '../Components/Icons';
import Products from '../Components/Products';
import Review from '../Components/Review';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <>
        <Header />
        <Home />
        <About/>
        <Icons />
        <Products />
        <Review />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage