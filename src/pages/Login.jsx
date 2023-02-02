import React, { useEffect } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'bootstrap';

const Login = () => {
  const int = {
    email: "",
    password: "",

  }

  const [user, setUser] = useState(int);
  const token = localStorage.getItem("token")

  const navigate = useNavigate()


  const Submit = async (event) => {
    event.preventDefault();
    console.log(user)
    let res = await axios.post("https://drouponapinode.ityogistech.com/api/account/login", user)
    localStorage.setItem("token", res.data.accessToken);
    console.log(res.data);
    // alert(res.data.Message);
    navigate('/home')
  };
 
  const inputEvent = (event) => {
    const { name, value } = event.target;
    console.log(value, name)
    setUser({ ...user, [name]: value, });
  };
  return (

    <>
      <div className='loginbox'>
        <div className='log'>
          <h1>Login </h1>
        </div>
        <div className='form'>

          <form className="click" method='post'>
            <input type="email" name="email" placeholder='enter your email' onChange={inputEvent} required /> <br />
            <input type='password' name="password" placeholder="password" onChange={inputEvent} required /> <br />
            <button type="submit" onClick={Submit}>Log in</button> &nbsp;<br />
            <p>Don't have an account ? Register Now!</p>
            <button> <Link className='registerbtn' to="/register" tittle={"Register"}>Register</Link> </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login