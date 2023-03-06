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

function LoginForm({heading}) {

  // States
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value});
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
          reqData );
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
      {/* <div className="login">
        <h3>{heading}</h3>
      </div> */}
      {/* <form 
        className="login-form"
        onSubmit={handleOnFormSubmit}
      >
        <input
          type="text"
          placeholder="Email"
          value={loginFormData?.email}
          name="email" 
          onChange={handleOnInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginFormData?.password}
          name="password"
          onChange={handleOnInputChange}
        />
          <button type="submit">Login</button>
      </form> */}

      <div className="login-form-ui">
      <span className="logo"></span>
  <div className="email">
    <label for="email">Email Address</label>
    <div className="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
      <input type="email" name="email" placeholder="Username@gmail.com"/>
    </div>
  </div>
  <div className="password">
    <label for="password">Password</label>
    <div className="sec-2">
      <ion-icon name="lock-closed-outline"></ion-icon>
      <input className="pas" type="password" name="password" placeholder="············"/>
      <ion-icon className="show-hide" name="eye-outline"></ion-icon>
    </div>
  </div>
  <button className="login">Login </button>
  <div className="footer"><span><Link to="/signup">Signup</Link></span><span><Link to="/forgot-password">Forgot Password?</Link></span></div>
</div>
    </>
  )
}

export default LoginForm
