import React from 'react'
import "../components/Banner.css"

const Banner = ({ h1, p, bgphoto }) => {
  return (
    <div className=' ibanner d-flex  justify-content-center align-items-center flex-column' style={{ backgroundImage: `url(${bgphoto})`, height: "80vh" }}>

      <div className=' '>
        <h1 >{h1}</h1>
        <p>{p}</p>
      </div>
    </div>

  )
}

export default Banner