import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)

    }
    return (
        
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>

            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-title">Package: {price}</h6>
                    <p class="card-text">{description}</p>
                    <Link to='/checkout'>
                    <button onClick={() => navigateToServiceDetail(id)} class="btn btn-warning">Book Now</button>

                    </Link>
                   
                </div>
            </div>

        </div>

    );
};

export default Service;

