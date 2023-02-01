import React from 'react'
import Footicon from '../components/Footicon'


const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <div className='container text-light'>
                <div className="row ">
                    <div className="col-md-3 col-sm-12 d-flex flex-column ">
                        <Footicon h={"IARIV"} p={"iAriv is a passionate Virtual tour company where users can upload 360 tours . We are passionate about helping companies & photographers market their tours to their customers and fans."} />
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex flex-column ">
                        <Footicon h2={"Manu menu"} p={"Explore"} p1={"Cummunity"} p2={"Pricing"} p3={"Relator"} p4={"Knowledge Base"} />
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex flex-column ">
                        <Footicon h2={"Navigation"} p={"About us"} p1={"Contact"} p2={"Privacy"} p3={"Terms & Condition"}/>
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex flex-column ">
                        <Footicon h2={"Navigation"} p={"facebook"} p1={"instagram"} p2={"twitter"} p3={"linkedIn"} p4={"youtube"} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer