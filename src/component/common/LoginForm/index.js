import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="login">
        <h3>{heading}</h3>
      </div>
      <form 
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
      </form>
    </>
  )
}

export default LoginForm
