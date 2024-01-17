import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-solid-svg-icons'





export default function Banner() {
  return (
    <div className='d-flex flex-column justify-content-center banner gap-3'>
        <h1 className=' title fw-bold custom-left-margin'>Tom Kastoryano</h1>
        <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-5">
            <h3 class="custom-left-margin">
                I'm a frontend developer that want to make the internet more pretty and accessible
                
            </h3>
            
            
        </div>
        

    </div>
    </div>
  )
}
