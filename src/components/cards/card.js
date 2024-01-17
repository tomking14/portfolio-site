import React from 'react'
import './cards.css';
// import blackhole from '../../images/blackhole.jpeg'

export default function Card(props) {
  return (
    <div>
    <div className='d-flex flex-column flex-md-row card-container mb-5'>
        <div>
            <h2 className="mb-4">{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <img src={props.image} alt="Black hole" className='image-size'/>
    </div>
    
    </div>
    
  )
}
