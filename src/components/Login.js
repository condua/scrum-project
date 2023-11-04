import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../scss/components/Login.scss'
import data from '../json/password.json'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://example.com/api/login', {
            email: email,
            password: password,
          });
    
          console.log('Login successful!', response.data);
          // Handle successful login, e.g., redirect the user or store authentication token in the state
        } catch (error) {
          console.error('Login failed!', error);
          // Handle login error, e.g., display an error message to the user
        }
      };

    return (
        <div className='Login'>
            <div className='Form-container'>
                <div>
                    <h1>Login</h1>
                </div>
                <div className='Form'>
                    <p>Email</p>
                    <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <p>Password</p>
                    <input placeholder='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <br/>
                    <button className='button-login' onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;