import React from 'react'
import '../pages/Menu.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Menu = () => {
  return (
    <>

      <div className='menu'>
        <div className='links'>
          <ul>
            <li>
              <Link to={"/explore"}>EXPLORE</Link>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/Community"}>COMMUNITY</Link>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/Pricing"}>PRICING</Link>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/Realtor"}>REALTOR?</Link>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/Knowledgebase"}>KNOWLEDGEBASE</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            </li>

          </ul>
        </div>

        <div className='social'>
          <input type="search" placeholder='Search' />
          <div> <Button tittle="Create Tour"></Button></div>
          <div><Link to="/login"><Button tittle={"Login"} ></Button></Link></div>
        </div>

      </div>
    </>
  )
}

export default Menu







