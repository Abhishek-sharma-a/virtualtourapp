import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';

const Register = () => {
  const int = {
    "role": "Provider",
    "provider_types": "7",
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "created_by": "USER",

  }

  const [user, setUser] = useState(int);
  const navigate = useNavigate()

  const Submit = async (event) => {
    event.preventDefault();
     console.log(user);
     let res = await axios.post("https://drouponapinode.ityogistech.com/api/account/register", user)
    console.log(res.data);
    alert(res.data.Message);
    navigate('/')
  };


  const inputEvent = (event) => {
    const { name, value } = event.target;
    console.log(value, name);
    setUser({ ...user, [name]: value, });
  };

  return (
    <>
      <div className=''>
        <div className='log'>
          <h1>Create Your Account</h1>
        </div>
        <div className="form">
          <div className="register" method='post'>
            <input type="text" name="firstname" placeholder='enter your first name' onChange={inputEvent} required />
            <input type="text" name="lastname" placeholder='enter your last name' onChange={inputEvent} required /><br />
            <input type="email" name="email" placeholder='enter your email' onChange={inputEvent} required />
            <input type="password" name="password" placeholder='create password' onChange={inputEvent} required /> <br />
            <input type="text" name="role" placeholder='role' onChange={inputEvent} required />
            <input type="text" name="provider_types" placeholder='provider_types' onChange={inputEvent} required /> <br />
            <input type="text" name="created_by" placeholder='created by' onChange={inputEvent} required />
            <input type="option" name="gender" placeholder='Gender' onChange={inputEvent} required /> <br />
            <button className='submitbtn' type='submit' onClick={Submit} tittle={"Submit"}>Submit</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register
