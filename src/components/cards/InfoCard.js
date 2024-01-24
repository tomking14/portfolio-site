import React from 'react'
import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function InfoCard(props) {
  return (
    <div tabIndex="0" className='card-container mb-5 d-flex'>
      <img src={props.image} alt= {props.imageAlt} className='image-size mt-3'/>
    <div className='d-flex flex-column flex-md-row '>
        <div className='card-description'>
          <div className='d-flex mt-3 justify-content-between'>
            <h2 className="medium-text mb-2">{props.title}</h2>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </div>
            <p className='light-text'><a tabIndex="-1" href={props.cardLink} target="_blank" rel="noopener noreferrer" className='card-container-action text-black text-decoration-none'>{props.description}</a></p>
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
