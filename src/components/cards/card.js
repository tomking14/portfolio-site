import React from 'react'
import './cards.css';
import blackhole from '../../images/blackhole.jpeg'

export default function card() {
  return (
    <div className='d-flex flex-column flex-md-row card-container'>
        <div>
            <h2 className="mb-4">Internship</h2>
            <p>Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript</p>
        </div>
        <img src={blackhole} alt="Black hole" className='image-size'/>
    </div>
  )
}
