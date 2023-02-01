import React from 'react'
import "../components/Button.css"

const Button = props => {
  return (
    <>
      <button className="rounded mx-1" >{props.tittle}</button>
    </>
  )
}


export default Button
