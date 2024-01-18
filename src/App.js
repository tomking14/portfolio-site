
import Banner from './components/banner/Banner.js';
import Card from './components/cards/Card.js';
import Navbar from './components/NavigationBar/Navbar.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useRef,useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import blackhole from './images/blackhole.jpeg'
import bottomimage from './images/bottom.png'
import header from './images/headerimage.png'




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
      <div className={`navbar-class navbar-styling ${hasScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
            <Navbar scrollToRef={scrollToRef} refs={{ projectsRef, aboutMeRef, bannerRef }}/>
        </div>
      </div>
    <div className='container'>
      
      <Banner />
      <h1 ref={projectsRef} className='mb-5 highlight fw-bold regular-text'>Projects</h1>
      <Card data-aos="fade-up" imageAlt={"black hole"} title={"Internship"} image={blackhole} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      <Card data-aos="fade-up" imageAlt={"horizon"} title={"Film Site"} image={bottomimage} description={"Worked within a Scrum to build a full stack application mimicking a cinema site to order movie tickets using React and Flask with a focus on the frontend side "}/>
      <Card data-aos="fade-up" imageAlt={"space"} title={"Ride Share Application"} image={header} description={"Worked with a partner using agile methodology to create an android application letting users create and accept ride requests and offers using Android Studio, and Google Firebase"}/>

    </div>
    </div>
  );
}

export default App;
