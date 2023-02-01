import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container fs-1 text-center my-5'>
        ERROR 404<br /> Page Not Found. <br />
        <span><Link to={"/"}>Go to Home</Link></span>

    </div>
  )
}

export default NotFound