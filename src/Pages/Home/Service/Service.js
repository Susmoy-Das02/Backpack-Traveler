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

            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Package: {price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to='/checkout'>
                    <button onClick={() => navigateToServiceDetail(id)} className="btn btn-warning">Book Now</button>

                    </Link>
                   
                </div>
            </div>

        </div>

    );
};

export default Service;

