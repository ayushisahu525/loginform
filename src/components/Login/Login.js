import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <form className='form-container-2'>
                <h1>Log In</h1>

                <div className='input-container'>
                    <label className='title'>Email</label>
                    <div>
                        <input className='email' type="email"  required />
                    </div>
                </div>

                <div className='input-container'>
                    <label className='title'>Password</label>
                    <div>
                        <input className='password' type="password" required />
                    </div>
                </div>

                <div className='sign-up-container'>
                    <button className='sign-up'>Log in</button>
                </div>
                <p className='sign-up-bottom-text'>
                    <Link to="/signup">
                        Don't have an account? Sign-up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;