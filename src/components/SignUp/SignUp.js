import React, { useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';
import { createUserWithEmailAndPassword } from "firebase/auth";




const SignUp = () => {
    let navigation = useNavigate();

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [conpass, setConpass] = useState('');
    let [error, setError] = useState('');

    // let [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    let emailFild = event => {
        setEmail(event.target.value)
        // console.log(email);
    }
    let passField = event => {
        setPass(event.target.value)
        // console.log(pass);
    }
    let conpassField = event => {
        setConpass(event.target.value)
    }
    let submit = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, pass)
        // createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                const myuser = userCredential.user;
                console.log(myuser);
                if (myuser) {
                    navigation('/login')
                }
            })
            .catch(err => {
                console.error(err);
            })

        if (pass !== conpass) {
            setError("Confirm Password Don't Match")
            return;
        }

        // if (user) {
        //     navigation('/login')
        // }
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Sign Up </h2>
                <div>
                    <form onSubmit={submit}>
                        <div className='input-group'>
                            <label htmlFor='email'> Email </label>
                            <input onBlur={emailFild} type="email" name='email' id='1' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='password'> Password </label>
                            <input onBlur={passField} type="password" name='password' id='2' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='confirm-password'> Confirm Password </label>
                            <input onBlur={conpassField} type="password" name='confirmpassword' id='3' />
                        </div>
                        <input className='form-submit' type="submit" value="Sign Up" required />
                    </form>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <p>
                        Already Have Account ? <Link to='/login' className='form-link'> Login </Link>
                    </p>
                    <p> ______________________________________________________ </p>
                    <button> <i className="fa-brands fa-google "></i> Continue With Google </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;