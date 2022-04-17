import React from 'react';
import NotFoundPic from '../../../images/NotFoundPic.png'

const NotFound = () => {
    return (
        <div>

            <h2 className='text-danger text-center'>Page Not Found</h2>


            <img className='w-100' src={NotFoundPic} alt="" />
            
        </div>
    );
};

export default NotFound;