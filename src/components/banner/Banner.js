import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import profilepic from '../../images/Profile.png'





export default function Banner() {
  return (
    <div>
    <div className='d-flex flex-column justify-content-center banner gap-4'>
        <h1 className='title fw-bold mb-0'>Tom Kastoryano</h1>
        <div className="row">
        <div className="col-10 col-sm-9">
            <h3 class="mb-4">
                I'm a frontend developer that want to make the internet more pretty and accessible 
            </h3>
        </div>
        <div className='d-flex gap-4 justify-content-center justify-content-md-start'>
            <a href="https://www.linkedin.com/in/tom-kastoryano-094699234/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://github.com/tomking14" target="_blank" rel="noopener noreferrer" className='custom-link'>
              <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
                
            <a href="mailto:tomykastor@gmail.com" className="custom-link">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
            <a href="https://www.instagram.com/tomykastor/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
            </a>
        </div>
      </div>
    </div>
  </div>
  )
}
