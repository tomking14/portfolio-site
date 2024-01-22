import React, {useEffect } from 'react';
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import 'aos/dist/aos.css';
import AOS from 'aos';





export default function Banner() {
  useEffect(()=>{
    AOS.init({
      duration: 3000, 
      once: true, 
    });
  },[])
  return (
    <div>
    <div className='d-flex flex-column justify-content-center banner gap-4'>
        <h1 data-aos="zoom-in" className='title mb-0 large-text'>Tom Kastoryano<span className='cursor'></span></h1>
        <div className="row">
        <div data-aos="zoom-in" data-aos-delay="350" className="col-10 col-sm-9">
            <h3 class="mb-4 regular-text">
                A frontend developer that wants to make the internet more 
                 <strong class="highlight light-text-italic"> pretty</strong> and 
                 <strong class="highlight light-text-italic"> accessible</strong>
            </h3>
        </div>
        <div className='d-flex gap-4 justify-content-center justify-content-md-start'>
        <div data-aos="fade-up" data-aos-delay="600">
            <a href="https://www.linkedin.com/in/tom-kastoryano-094699234/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="700">
            <a href="https://github.com/tomking14" target="_blank" rel="noopener noreferrer" className='custom-link'>
                <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
            <a href="mailto:tomykastor@gmail.com" className="custom-link">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
            <a href="https://www.instagram.com/tomykastor/" target="_blank" rel="noopener noreferrer" className='custom-link text-decoration-none'>
                <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
