import React, { useState, useEffect } from 'react';
import './navbar.css'
export default function Navbar({ scrollToRef, refs }) {
  return (
    <div className='d-flex justify-content-between navbar-styling'>
        <a href="#projects" className='navbar-link'>
             <h3 className='mt-3 regular-text'>TK</h3>
        </a>
        <div className=' mt-3 d-flex justify-content-end gap-3 gap-lg-5'>
        <a href="#projects" onClick={() => scrollToRef(refs.projectsRef)} className='navbar-link'>
            <h4 className='regular-text'>Projects</h4>
        </a>
        <a href="#projects" className='navbar-link'>
            <h4 className='regular-text'>About Me</h4>
        </a>
        <a href="https://www.linkedin.com/in/tom-kastoryano-094699234/" target="_blank" rel="noopener noreferrer" className='navbar-link'>
            <h4 className='regular-text resume-button'>Resume</h4>
        </a>
      
        </div>
    </div>
  )
}
