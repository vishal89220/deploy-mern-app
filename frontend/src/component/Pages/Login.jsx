import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from '../Utils';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const navigate = useNavigate();

    const [LogInfo , setLogInfo] = useState(
      {
        email : '',
        password : ''
      }
    )
    const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInfo(prev => ({ ...prev, [name]: value }));
  };
    const Logdata = async(e)=> {
      e.preventDefault();
      

    try{
      const url = 'http://localhost:8080/auth/login';

      const response = await fetch(url,{
        method : 'POST',
        headers : {
          'content-type' : 'application/json',

        },
        body : JSON.stringify(LogInfo)
      })
      const data = await response.json();
      const {JwtToken , name, message ,success} = data
      if(success){
        
        localStorage.setItem('token' , JwtToken);
        console.log( "token",JwtToken)
         localStorage.setItem('UserLoggedIn' , name);
        setTimeout(() => {
          navigate('/dashboard')
        }, 1000);
         handleSuccess('login successfully');
      }
      else {
      handleError(data.message || "Invalid credentials");
    }
    }catch(error){
console.error(" Network error:", error);
      handleError("Something went wrong. Please try again.");
    }
    }

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center bg-light pt-5">
      <div className="row w-100 shadow p-4 bg-white rounded">
        {/* Form Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
          <form onSubmit={Logdata} className="w-100">
            <h2 className="mb-4 text-primary">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                className="form-control"
                placeholder="Enter your email"
                value={LogInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                name='password'
                value={LogInfo.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Link to="/signup" className="text-decoration-none text-secondary">
                Don’t have an account? <strong>Sign Up</strong>
              </Link>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>

        {/* Image Column */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <img
            src="./images/blog01-img.jpg"
            alt="Login Visual"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
