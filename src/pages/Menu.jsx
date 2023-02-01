import React from 'react'
import '../pages/Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>

      <div className='menu'>
        <div className='links'>
          <ul>
            <li>
              <Link to={"/"}>EXPLORE</Link>
              <Link to={"/"}>COMMUNITY</Link>
              <Link to={"/"}>PRICING</Link>
              <Link to={"/"}>REALTOR?</Link>
              <Link to={"/"}>KNOWLEDGEBASE</Link>
            </li>
          </ul>
        </div>

        <div className='social'>

        </div>

      </div>
    </>
  )
}

export default Menu







