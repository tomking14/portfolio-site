
import Banner from './components/banner/Banner.js';
import Card from './components/cards/Card.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import blackhole from './images/blackhole.jpeg'
import bottomimage from './images/bottom.png'
import header from './images/headerimage.png'




function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  },[])
  return (
    <div className='container'>
      <Banner/>
      <h2 className='mb-5'>Projects</h2>
      <Card data-aos="fade-up" title={"Internship"} image={blackhole} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      <Card data-aos="fade-up" title={"Film Site"} image={bottomimage} description={"Worked within a Scrum to build a full stack application mimicking a cinema site to order movie tickets using React and Flask with a focus on the frontend side "}/>
      <Card data-aos="fade-up" title={"Ride Share Application"} image={header} description={"Worked with a partner using agile methodology to create an android application letting users create and accept ride requests and offers using Android Studio, and Google Firebase"}/>

    </div>
  );
}

export default App;
