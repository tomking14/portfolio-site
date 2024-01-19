import React from 'react'
import './cards.css';
// import blackhole from '../../images/blackhole.jpeg'

export default function Card(props) {
  return (
    <div className='d-flex flex-column flex-md-row card-container mb-5'>
        <div>
            <h2 className="mt-4 mb-2 medium-text">{props.title}</h2>
            <p className='light-text'>{props.description}</p>
        </div>
        <img src={props.image} alt= {props.imageAlt} className='image-size'/>
    </div>
    
  )
}
