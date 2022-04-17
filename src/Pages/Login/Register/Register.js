import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const navigatelogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className=' text-info text-center mt-2'>Please register</h2>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your name" required />
                    </Form.Group>


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
                <p>Already have an acount ?<Link to='/login' className='text-danger text-decoration-none' onClick={navigatelogin} >Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;