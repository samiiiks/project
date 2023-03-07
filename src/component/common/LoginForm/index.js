import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";


const API_URL = "https://reqres.in/api";

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}

function LoginForm({ heading }) {

  // States
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  }

  const handleOnFormSubmit = async (e) => {
    e.preventDefault();

    const reqData = {
      "email": loginFormData?.email,
      "password": loginFormData?.password
    }

    if (reqData.email !== "" && reqData.password !== "") {

      validateEmail(reqData.email)
      try {

        const resData = await axios.post(
          `${API_URL}/login`,
          reqData);
        console.log('res', resData)
        navigate("/dashboard");

      } catch (e) {
        console.log(e);
        alert("Form submited with error")
      }
    } else {
      alert("Email and Password should not be empty.")
    }

  }

  return (
    <>
      <div className="login-form-ui">
        <h1>{heading}</h1>
        <span className="logo"></span>
        <div className="email">
          <label for="email">Email Address</label>
          <div className="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleOnInputChange} />
          </div>
        </div>
        <div className="password">
          <label for="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input className="pas" type="password" name="password" placeholder="Enter your password" onChange={handleOnInputChange} />
            <ion-icon className="show-hide" name="eye-outline"></ion-icon>
          </div>
        </div>
        <button className="login" onClick={handleOnFormSubmit}>Login </button>
        <div className="footer"><span><Link to="/signup">Signup</Link></span><span><Link to="/forgot-password">Forgot Password?</Link></span></div>
      </div>
    </>
  )
}

export default LoginForm
