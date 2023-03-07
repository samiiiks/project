import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./style.css"

const API_URL = "https://reqres.in/api";

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  return false
}

const validatePassword = (password) => {
  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    return true;
  }

  return false;
}
 
function SignupForm({ heading }) {

  // States
  const [SignupFormData, setSignupFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...SignupFormData, [name]: value });
  }
  const handleOnFormSubmit = async (e) => {
    e.preventDefault();

    const reqData = {
      "email": SignupFormData?.email,
      "password": SignupFormData?.password,
      // "name": SignupFormData?.name
    }

    if (reqData.email !== "" && reqData.password !== "") {

      const isValidEmail = validateEmail(reqData.email)
      const isValidPassword = validatePassword(reqData.password)

      if (!isValidEmail) {
        toast("You have entered an invalid email address!")
        return;
      }

      if (isValidEmail && isValidPassword) {
        try {

          const resData = await axios.post(
            `${API_URL}/login`,
            reqData);
            if(resData.status === 200) {
              localStorage.setItem('token', resData.data.token)
              toast("you are registered successfully.")
              navigate("/login");
            } else {
              localStorage.setItem('token', "")
              toast("something went wrong.")
            }
        }
        catch (e) {
          console.log(e);
          localStorage.setItem('token', "")  
        }
      }

    } else {
      toast("Email and Password should not be empty.")
    }

  }


  return (
    <>
      <div className="signup-form-ui">
        <h1>{heading}</h1>
        {/* <span className="logo"></span> */}
        <div className="field-ui">
          <div className="name">
          <label htmlFor="name">Name</label>
          <div className="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="name" name="name" placeholder="Username" onChange={handleOnInputChange} />
          </div>
        </div>     
        </div>     
         <div className="field-ui">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" name="email" placeholder="Enter your email" onChange={handleOnInputChange} />
            </div>
          </div>
          <div className="field-ui">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input className="pas" type="password" name="password" placeholder="Enter your password" onChange={handleOnInputChange} />
            <ion-icon className="show-hide" name="eye-outline"></ion-icon>
          </div>
        </div>
        <button className="signup" onClick={handleOnFormSubmit}>Signup</button>
        <div className="footer"><span><Link to="/login">Login</Link></span><span><Link to="/forgot-password">Forgot Password?</Link></span></div>
      </div>
    </>
  )
}
export default SignupForm;
