import React from 'react'
import './bottomBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
export default function BottomBanner(props) {
  return (
    <div className='bottomBanner-style'>
        <div className='banner-alignment d-flex justify-content-between'>
        <p className='regular-text-body'>
            <span className='icon-style'>{props.icon}</span> Tom Kastoryano
        </p>
        <div className='d-flex gap-3'>
        <a href="https://www.linkedin.com/in/tom-kastoryano-094699234/" target="_blank" rel="noopener noreferrer" className='custom-link-bottomB'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/tomking14" target="_blank" rel="noopener noreferrer" className='custom-link-bottomB'>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="mailto:tomykastor@gmail.com" className="custom-link-bottomB">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.instagram.com/tomykastor/" target="_blank" rel="noopener noreferrer" className='custom-link-bottomB'>
                <FontAwesomeIcon icon={faSquareInstagram} size="2x"/>
            </a>
        </div>

        </div>
        
        
      
    </div>
  )
}