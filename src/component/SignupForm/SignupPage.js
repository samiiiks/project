import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [detail, setDetail] = useState({email:"", password:""});
const navigate=useNavigate();
  const userData = async () => {
    try {

        const data = await axios.post('https://reqres.in/api/register')
        .then((res) => setDetail(res.data.data))
        console.log(data.data)

    } catch (e) {
        console.log(e);
    }
}
function changehandle(e) {

  setDetail({
    ...detail,
    [e.target.name]: e.target.value,
  });
}
useEffect(() => {
  userData();
}, [detail])
const onSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem(
    "userinfo",
    JSON.stringify({
      name: detail.name,
      email: detail.email,
      password: detail.password
    })

  );
  console.log( detail);
  navigate("/loginpage");
};
  return (
    <div>
      <input type="text" name='name' placeholder='Enter your Name' value={detail?.name} onChange={changehandle}/>
      <input type="text" name='email' placeholder='Enter your Email' value={detail?.email} onChange={changehandle}/>
      <input type="password" name='password' placeholder='Enter your password'  value={detail?.password} onChange={changehandle}/>
      <button className='btn' type='submit' onClick={onSubmit} >Button</button>
    </div>
  )
}

export default SignupPage
