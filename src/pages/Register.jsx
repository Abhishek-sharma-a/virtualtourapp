import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Button  from '../components/Button';

const Register = () => {
  const int = {
    "dob": "",
    "email": "",
    "password": "",
    "name": "",



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
      <div className='register my-5'>
        <div className='log'>
          <h1>Create Your Account</h1>
        </div>
        <div className="form ">
          <div className="register" method='post'>
            <input type="text" name="name" placeholder='enter your name' onChange={inputEvent} required /><br />
            <input type="email" name="email" placeholder='enter your email' onChange={inputEvent} required /><br />
            <input type="password" name="password" placeholder='create password' onChange={inputEvent} required /> <br />
            <input type="date" name="dob" placeholder='date of birth' onChange={inputEvent} required />
       <div className='ms-5'>     <Button  type='submit' onClick={Submit} tittle={"Submit"}></Button></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register


