import React from 'react';
import '../scss/components/Login.scss'

const Login = () => {
    return (
        <div className='Login'>
            <div className='Form-container'>
                <div>
                    <h1>Login</h1>
                </div>
                <div className='Form'>
                    <p>Username</p>
                    <input placeholder='Username'/>

                    <p>Password</p>
                    <input placeholder='Password' type='password'/>

                    <br/>
                    <button className='button-login'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;