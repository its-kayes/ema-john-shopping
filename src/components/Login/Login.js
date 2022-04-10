import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Login </h2>
                <div>
                    <form >
                        <div className='input-group'>
                            <label htmlFor='email'> Email </label>
                            <input type="email" name='email' id='' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='password'> Password </label>
                            <input type="password" name='password' id='' required />
                        </div>
                        <input className='form-submit' type="submit" value="Login" required />
                    </form>
                    <p>
                        New to Eha-John? <Link to='/signup' className='form-link'> Create New Account </Link>
                    </p>
                    <p> __________________________  or  __________________________ </p>
                </div>
            </div>
        </div>
    );
};

export default Login;