import React from 'react'
import './cards.css';

export default function Card(props) {
  return (
    <div tabIndex="0" className='card-container mb-5 d-flex'>
      <img src={props.image} alt= {props.imageAlt} className='image-size mt-3'/>
    <div className='d-flex flex-column flex-md-row '>
        <div className='card-description'>
            <h2 className="mt-3 mb-2 medium-text">{props.title}</h2>
            <p className='light-text'><a href={props.cardLink} target="_blank" rel="noopener noreferrer" className='card-container-action text-black text-decoration-none'>{props.description}</a></p>
            {props.techArray && props.techArray.length > 0 && (
            <div className='d-flex gap-3'>
              {props.techArray.map((item, index) => (
                <p className='regular-text pill-design' key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>
    </div>
    </div>
    
  )
}
