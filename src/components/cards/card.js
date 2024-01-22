import React from 'react'
import './cards.css';
// import blackhole from '../../images/blackhole.jpeg'

export default function Card(props) {
  return (
    <div tabIndex="0" className='card-container mb-5 d-flex'>
      <img src={props.image} alt= {props.imageAlt} className='image-size mt-3'/>
    <div className='d-flex flex-column flex-md-row '>
        <div className='card-description'>
            <h2 className="mt-3 mb-2 medium-text">{props.title}</h2>
            <p className='light-text'>{props.description}</p>
        </div>
        
    </div>
    </div>
    
  )
}
