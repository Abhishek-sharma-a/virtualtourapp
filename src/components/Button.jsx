import React from 'react'
import "../components/Button.css"

const Button = ({tittle}) => {
  return (
    <>
      <button className="rounded mx-1" >{tittle} </button>
    </>
  )
}


export default Button
