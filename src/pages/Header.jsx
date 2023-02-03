import React from 'react'
import '../pages/Header.css'
import { Link } from 'react-router-dom'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from "react-icons/bs"
import { BsYoutube } from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'



const Header = () => {
    return (
        <>
            <div className='header ' >

                <div className="topbar-list">
                    <ul >
                        <li>
                            <Link to={"/"} className='ms-3'><BsTelephoneFill /> +123 45677 789</Link>
                            <Link to={"/"} className='ms-3'><CgMail/>  iariv@interactive.com </Link>
                        </li>
                    </ul>
                </div>

                <div className="topbar-list ">
                    <ul>
                        <li>

                       
                            <Link to={"/"} className='ms-3'> <BsTwitter /> </Link>
                            <Link to={"/"} className='ms-3'> <BsFacebook /> </Link>
                            <Link to={"/"} className='ms-3'>  <BsYoutube /> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header






