import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        // <div className='service'>
        //     <img src={img} alt="" />
        //     <h2>this is service: {name} </h2>
        //     <p>Package : ${price}</p>
        //     <p id='description'><small>{description}</small></p>
        //     <button>Book: {name}</button>
        // </div>

        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>

            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-title">Package: {price}</h6>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>

    );
};

export default Service;