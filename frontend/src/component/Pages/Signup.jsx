import React, { useState } from 'react';
import { handleError, handleSuccess } from '../Utils'; // You should also define handleSuccess for success message
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
const navigate = useNavigate()

  const [signInfo, setSignInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { name, email, password } = signInfo;

    if (!name || !email || !password) {
      return handleError("Please fill all the fields");
    }

    try {
      const url  = 'http://localhost:8080/auth/signup'
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInfo),
      });

      const data = await response.json();
      if (data.success) {

        setTimeout( ()=> {

          navigate('/login')
        },2000);
        handleSuccess('signup successfully')
      }
      

      if (!response.ok) {
        console.error("Signup error response:", data);
        return handleError(data.message || "Signup failed");
      }

      console.log(" Signup successful:", data);
      // handleSuccess("Signup successful!"); // Optional: toast or redirect

    } catch (error) {
      console.error(" Network error:", error);
      handleError("Something went wrong. Please try again.");
    }
  };

  return (

    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 shadow p-4 bg-white rounded">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
          <h1 className="mb-4 text-primary">Signup</h1>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Username:</label>
              <input
                id="name"
                type="text"
                value={signInfo.name}
                name="name"
                className="form-control"
                placeholder="Enter your Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                value={signInfo.email}
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                value={signInfo.password}
                name="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Signup</button>
          </form>
           <Link to="/login" className="text-decoration-none text-secondary">
                          Already have an Account ? <strong>Login</strong>
                        </Link>
        </div>

        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <img
            src="./images/blog01-img.jpg"
            alt="Signup Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
