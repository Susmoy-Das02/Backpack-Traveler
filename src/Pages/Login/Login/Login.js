import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const navigateRegister = event => {
        navigate('/register')

    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email =  event.target.email.value; 
        const password = event.target.password.value;
    }



    return (
        <div className='container w-50 mx-auto'>
            <h2 className=' text-info text-center mt-2'>Please login</h2>
            <Form onSubmit={ handleRegister } >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Backpack traveler ?<Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister} >Please Register</Link> </p>
        </div>
    );
};

export default Login;