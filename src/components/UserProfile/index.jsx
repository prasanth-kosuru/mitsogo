import React from 'react'
import './index.css'
import pro from '../../Images/profile-pic-01.jpg'
import icons from '../../Images/icons.gif'
import user1 from '../../Images/user1.jpeg'
import user2 from '../../Images/user2.jpeg'
import user3 from '../../Images/user3.jpeg'
import { Unstable_Grid2 } from '@mui/material'

const UserProfile = (props) => {
    const {x} = props
  return (
    <div className={x?"shrink-main-profile-container":"main-profile-container"}>
        <div className="pro-details">
            <img src={pro} alt="" className="pro-container"/>
            <p className="nick">Nick Herasimenka</p>
            <p className="states">United States</p>
            <p className="pk">
                <img src ={icons} alt="icons" className="social-media-icons"/>
            </p>
        </div>

        <div className="other">
            <p className="o-user">Other Users</p>
            <p className="threedots">
                <img src ={icons} alt="icons" className="threedots-icon"/>
            </p>
        </div>
        
       <div className="desktop-view">
            <div className={x?"shrink-user-card":"user-card"}>
                <img src={user1} alt="" className="user-profile"/>
                <div>
                    <p className="username">Drew James</p>
                    <p className="country">United States</p>
                </div>
                <p className={x?"shrink-contact":"contact"}>Mobile:8715674877</p>
            </div>
            <div className={x?"shrink-user-card":"user-card"}>
                <img src={user2} alt="" className="user-profile"/>
                <div>
                    <p className="username">Bavid Kames</p>
                    <p className="country">United States</p>
                </div>
                <p className={x?"shrink-contact":"contact"}>Mobile:8715674877</p>
            </div>
            <div className={x?"shrink-user-card":"user-card"}>
                <img src={user3} alt="" className="user-profile"/>
                <div>
                    <p className="username">Lavid Emes</p>
                    <p className="country">United States</p>
                </div>
                <p className={x?"shrink-contact":"contact"}>Mobile:8715674877</p>
            </div>
        </div>
        
    <div className="mobile-view">
        <div className="mobile-usercard">
                <img src={user1} alt="" className="user-profile-mobile"/>
                <div>
                    <p className="username-mobile">Drew James</p>
                    <p className="country-mobile">United States</p>
                </div>
                <p className="contact-mobile">Mobile:8715674877</p>
        </div>
        <div className="mobile-usercard">
                <img src={user2} alt="" className="user-profile-mobile"/>
                <div>
                    <p className="username-mobile">Bavid Kames</p>
                    <p className="country-mobile">Lavid Emes</p>
                </div>
                <p className="contact-mobile">Mobile:8715674877</p>
        </div>
        <div className="mobile-usercard">
                <img src={user3} alt="" className="user-profile-mobile"/>
                <div>
                    <p className="username-mobile">Drew James</p>
                    <p className="country-mobile">United States</p>
                </div>
                <p className="contact-mobile">Mobile:8715674877</p>
        </div>
    </div>



       </div>

    
  )
}

export default UserProfile