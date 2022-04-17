import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const navigateLogin = () =>{
        navigate('/login');
    }

    if (user) {

        navigate ('/home');
        
      }

    const handleRegister = event =>{
        event.preventDefault();

        const name =event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email,password);




    }


    return (
        <div className='register-form'>
            <h2 className='text-center text-info'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />

                <Button variant="primary" type="submit">
                    Register
                </Button>



            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;
