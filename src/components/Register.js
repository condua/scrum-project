import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/components/Register.scss'

const Login = () => {
    const [email, setEmail] = useState('')    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(name)
        console.log(password)
        console.log(repassword)

        try {
            const response = await axios.post('https://example.com/api/register', {
                email: email,
                name: name,
                password: password,
                repassword: repassword,
            });

            console.log('Registration successful!', response.data);
            // Handle successful registration, e.g., redirect the user or display a success message
        } catch (error) {
            console.error('Registration failed!', error);
            // Handle registration error, e.g., display an error message to the user
        }
    };

    return (
        <div className='Register'>
            <div className='Form-container'>
                <div>
                    <h1>Register</h1>
                </div>
                <dive className='Form'>
                    <p>Email</p>
                    <input placeholder='Email' type='email' value={email} onChange={(e) =>{setEmail(e.target.value)}} />

                    <p>Name</p>
                    <input placeholder='Username' value={name} onChange={(e) =>{setName(e.target.value)}}/>

                    <p>Password</p>
                    <input placeholder='Password' type='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>

                    <p>Re-Password</p>
                    <input placeholder='Re-Password' type='password' value={repassword} onChange={(e) =>{setRepassword(e.target.value)}}/>

                    <br/>
                    <button className='button-login' onClick={handleSubmit}>
                        Sign Up
                    </button>
                </dive>
            </div>
        </div>
    );
};

export default Login;