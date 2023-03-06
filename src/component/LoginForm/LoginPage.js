import React from 'react'
import { useState } from 'react';

function LoginPage() {
  const [logdetail, setLogdetail] = useState({ password: "", email: "" });
  const navigate = useNavigate();
  
  function changehandle(e) {
    setLogdetail({
      ...logdetail,
      [e.target.name]: e.target.value,
    });
  }
  const checkinfo=(e)=> {
    e.preventDefault();
    const storedDetail= JSON.parse(localStorage.getItem("userinfo"));
  
  if (
    logdetail.mailid === storedDetail.mailid &&
    logdetail.password === storedDetail.password
  ) {
    navigate("/dashboard");
  } else {
    alert("Error on login");
  }
  }

  return (
    <div>
         <>
      <div class="login-page">
          <div class="login">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
          </div>
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              value={logdetail?.email}
              name="email" 
              onChange={changehandle}
            />
            <input
              type="password"
              placeholder="password"
              value={logdetail?.password}
              name="password"
              onChange={changehandle}
            />
          </form>
          <button onClick={checkinfo}>login</button>
      </div>
    </>
    </div>
  )
}

export default LoginPage
