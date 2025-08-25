
import Banner from './components/banner/Banner.js';
import InfoCard from './components/cards/InfoCard.js';
import Navbar from './components/NavigationBar/Navbar.js';
import AboutMe from './components/aboutMe/AboutMe.js';
import BottomBanner from './components/bottomBanner/BottomBanner.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'aos/dist/aos.css';
import AOS from 'aos';
import blackhole from './images/blackhole.png'
import bottomimage from './images/bottom.png'
import header from './images/headerimage.png'
import spaceships from './images/spaceships.png'
import spacebird from './images/spacebird.png'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';




function App() {
  const projectsRef = useRef(null);
  const bannerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const QAArr = ["SQL", "Linux" ,"DBeaver", "Postman", "Github"]
  const intershipArr = ["JavaScript", "CSS" ,"Bootstrap", "HTML", "A11Y"]
  const filmArr = ["React","Flask","Bootstrap","MongoDB","Axios"]
  const rideShareArr = ["Java","Google Firebase", "Android Studio"]

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
      once: true, 
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
      <h2 data-aos="fade-right" ref={projectsRef} className='highlight medium-text-titles'>
        Projects and Awards
        <span className="line" data-aos="custom-animation"></span>
        <span className="icon-container" data-aos="slide-right"><FontAwesomeIcon icon={faShuttleSpace} /></span>
    </h2>
    <div data-aos="fade-up">
          <InfoCard imageAlt={"black hole"} title={"Quality Assurance Engineer"} cardLink={"https://www.amdocs.com/news-press/att-selects-amdocs-support-its-business-support-systems-evolution-make-life-easier"} image={spaceships} techArray ={QAArr} description={"Designed and executed comprehensive test cases for key business processes, including billing processes, environment testing, and extensive customer data validation to ensure consistency and stability with the delivery of new features. Collaborated with cross-functional teams to achieve solutions, utilizing scrum and agile methodology."}/>
      </div>
      <div data-aos="fade-up">
          <InfoCard imageAlt={"black hole"} title={"Amdocs Internship"} cardLink={"https://www.amdocs.com/news-press/att-selects-amdocs-support-its-business-support-systems-evolution-make-life-easier"} image={blackhole} techArray ={intershipArr} description={"Contributed to Cricket's development of a design system, a framework of standardized UI components and page templates. This system, composed of accessible, adaptable, and user-friendly elements, streamlines and simplifies development for other Cricket developers, and enhances user experience. The development of the components also prioritized A11Y accessibility guidelines for universal usability."}/>
      </div>
      <div data-aos="fade-up">
          <InfoCard imageAlt={"horizon"} title={"Cinema130 Film Site"} cardLink={"https://cinema130s.web.app"} techArray ={filmArr} image={bottomimage} description={"Within a Scrum team, I contributed to building a full-stack application that mimics a cinema site for ordering movie tickets. This project utilized React, Flask, and MongoDB. I developed a multi-page site featuring complete user account management (creation, editing, and admin functionalities), ticket purchase and checkout processes, and an engaging, intuitive UI/UX."}/>
      </div>
      <div data-aos="fade-up">
          <InfoCard imageAlt={"space"} title={"Ride Share Application"} cardLink={"https://github.com/tomking14/RideShareApplication"} techArray ={rideShareArr} image={header} description={"Partnered in an Agile-driven project to create an Android app that allows users to create, edit, and manage ride requests and offers. We leveraged Android Studio and Google Firebase for efficient real-time data handling, and built a user friendly UI that helped users easily engange with the app."}/>
      </div>
      <div data-aos="fade-up">
          <InfoCard imageAlt={"spaceships"} title={"Presidential Service Awards"} cardLink={"https://presidentialserviceawards.gov"} image={spaceships} description={"Over 2018 and 2019, I completed more than 250 hours of community service, earning the gold level Presidential Service Award in both years—the highest award possible. This service involved weekly guidance for children, engaging them in various activities. I taught them about current news,  world conflicts and history, but also organized fun games to play with them."}/>
      </div>
      <div data-aos="fade-up">
          <InfoCard imageAlt={"space bird"} title={"Technology Student Association"} cardLink={"https://www.gatsa.org"} image={spacebird} description={"Competed in the 2019 TSA annual competition in the 3D animation section, securing third place in the state of Georgia by collaboratively creating a 3D animation during a hackathon, utilizing Maya Autodesk to develop skills in lighting, rendering, modeling, and animation."}/>
      </div>
      <h2 data-aos="fade-right" ref={aboutMeRef} className='highlight medium-text-titles'>
        More About Me 
        <span className="line" data-aos="custom-animation"></span>
        <span className="icon-container" data-aos="slide-right"><FontAwesomeIcon icon={faShuttleSpace} /></span>
      </h2>
      <div data-aos="fade-up">
          <AboutMe/>
      </div>
    </div>
    <BottomBanner icon={<FontAwesomeIcon icon={faCopyright}/>}/>
    </div> 
  );
}

export default App;
