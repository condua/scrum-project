import React, { useState, useEffect } from 'react';
import '../scss/components/Register.scss'

const Login = () => {
    const [email, setEmail] = useState('')    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const  handleSubmit = () =>{
        console.log(email)
        console.log(name)
        console.log(password)
        console.log(repassword)
    }

    return (
        <div className='Register'>
            <div className='Form-container'>
                <div>
                    <h1>Register</h1>
                </div>
                <form className='Form'>
                    <p>Email</p>
                    <input placeholder='Email' type='email' value={email} onChange={(e) =>{setEmail(e.target.value)}} />

                    <p>Name</p>
                    <input placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value)}}/>

                    <p>Password</p>
                    <input placeholder='Password' type='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>

                    <p>Re-Password</p>
                    <input placeholder='Re-Password' type='password' value={repassword} onChange={(e) =>{setRepassword(e.target.value)}}/>

                    <br/>
                    <button className='button-login' onClick={handleSubmit}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;