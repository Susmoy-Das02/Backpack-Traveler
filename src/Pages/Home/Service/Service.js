import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>this is service: {name} </h2>
            <p>Package : ${price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
        // <div class="card" style={{width: "18rem"}}>
        //     <img src={img} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <h5 class="card-title">{name}</h5>
        //             <h6 class="card-title">Package: {price}</h6>
        //             <p class="card-text">{description}</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //         </div>
        // </div>
    );
};

export default Service;