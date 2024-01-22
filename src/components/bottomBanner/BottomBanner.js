import React from 'react'
import './bottomBanner.css'
export default function BottomBanner(props) {
  return (
    <div className='bottomBanner-style'>
        <div className='banner-alignment d-flex gap-3'>
        <p className='regular-text-body'>
            <span className='icon-style'>{props.icon}</span> Tom Kastoryano
        </p>

        </div>
        
        
      
    </div>
  )
}
