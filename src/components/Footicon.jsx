import React from 'react'
import './Footicon.css'
import { Link } from "react-router-dom";
const Footicon = ({h,h2,p,p1,p2,p3,p4,px}) => {
  return (
    <div className='flist'>
      <Link to={"/"}><h1>{h}</h1></Link>
      <Link to={"/"}><h4>{h2}</h4></Link>
      <p>{px}</p>
      <Link to={"/"}><p>{p1}</p></Link>
      <Link to={"/"}><p>{p2}</p></Link>
      <Link to={"/"}><p>{p3}</p></Link>
      <Link to={"/"}><p>{p4}</p></Link> 
    </div>
  )
}

export default Footicon