
import Banner from './components/banner/Banner.js';
import Card from './components/cards/Card.js';
import Navbar from './components/NavigationBar/Navbar.js';
import AboutMe from './components/aboutMe/AboutMe.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'aos/dist/aos.css';
import AOS from 'aos';
import blackhole from './images/blackhole.jpeg'
import bottomimage from './images/bottom.png'
import header from './images/headerimage.png'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'




function App() {
  const projectsRef = useRef(null);
  const bannerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;
        setHasScrolled(offset > 300); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  },[])

  const scrollToRef = (ref, offset = 80) => { 
    if(ref && ref.current) {
      const position = ref.current.offsetTop - offset; 
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <div className={`navbar-class ${hasScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
            <Navbar scrollToRef={scrollToRef} refs={{ projectsRef, aboutMeRef, bannerRef }}/>
        </div>
      </div>
    <div className='container'>
      <div ref={bannerRef}>
        <Banner />
      </div>


      <h2 data-aos="fade-right" ref={aboutMeRef} className='highlight medium-text-titles'>
        More About Me 
        <span className="line" data-aos="custom-animation"></span>
        <span className="icon-container" data-aos="slide-right"><FontAwesomeIcon icon={faShuttleSpace} /></span>
    </h2>
      <div data-aos="fade-up">
          <AboutMe/>
      </div>

      <h2 data-aos="fade-right" ref={projectsRef} className='highlight medium-text-titles'>
        Projects
        <span className="line" data-aos="custom-animation"></span>
        <span className="icon-container" data-aos="slide-right"><FontAwesomeIcon icon={faShuttleSpace} /></span>
    </h2>
    
      <div data-aos="fade-up">
          <Card imageAlt={"black hole"} title={"Internship"} image={blackhole} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      </div>
      <div data-aos="fade-up">
          <Card data-aos="fade-up" imageAlt={"horizon"} title={"Film Site"} image={bottomimage} description={"Worked within a Scrum to build a full stack application mimicking a cinema site to order movie tickets using React and Flask with a focus on the frontend side "}/>
      </div>
      <div data-aos="fade-up">
          <Card data-aos="fade-up" imageAlt={"space"} title={"Ride Share Application"} image={header} description={"Worked with a partner using agile methodology to create an android application letting users create and accept ride requests and offers using Android Studio, and Google Firebase"}/>
      </div>
      
    </div>
    </div>
  );
}

export default App;
