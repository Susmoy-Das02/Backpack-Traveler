import React from 'react';
import person from '../../images/person.png'


const About = () => {
    return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 g-4'>
                        <h1 className='text-primary fw-bold' >My Goals</h1>
                        <h2>My name <span className='text-success'>Susmoy das</span>.I love Front-end web development.i want to work with web-development in font of my career.I want to see myself in a better place after the coure.I ant to wark in a good software company,i want to learn something in advance.</h2>

                        <h2 className='text-info' >Work hard is the ony option to achive my goal</h2>

                    </div>

                    <div className='col-md-6 g-4'>
                            <img class="img-fluid"  src={person} alt="" />


                        </div>



                </div>
            </div>
    );
};

export default About;