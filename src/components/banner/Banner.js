import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Banner() {
  return (
    <div className='d-flex flex-column justify-content-center banner gap-3'>
        <h1 className=' title fw-bold custom-left-margin'>Tom Kastoryano</h1>
        <div className="row">
        <div className="col-6">
            <h3 class="custom-left-margin">
                I'm a recent college graduate that loves frontend development and is looking to expand his horizons
            </h3>
        </div>
    </div>
    </div>
  )
}
