import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    let navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    let emailField = e => {
        setEmail(e.target.value);
    }
    let passField = e => {
        setPass(e.target.value);
    }
    let submit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, pass);
    }

    if (user) {
        navigate('/shop')
    }



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Login </h2>
                <div>
                    <form onSubmit={submit} >
                        <div className='input-group'>
                            <label htmlFor='email'> Email </label>
                            <input onBlur={emailField} type="email" name='email' id='1' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='password'> Password </label>
                            <input onBlur={passField} type="password" name='password' id='2' required />
                        </div>
                        <input className='form-submit' type="submit" value="Login" required />
                    </form>
                    <p style={{color: 'red'}}>
                        {error?.message}
                    </p>
                    <p>
                        New to Eha-John? <Link to='/signup' className='form-link'> Create New Account </Link>
                    </p>
                    <p> ______________________________________________________ </p>
                    <button> <i className="fa-brands fa-google "></i> Continue With Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;