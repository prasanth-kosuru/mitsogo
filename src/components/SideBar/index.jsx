import React from 'react'
import './index.css'
import icons from '../../Images/icons.gif'

const SideBar = (props) => {

  const {x} = props
  
  
  return (
    
            
            <div className={x?"sidebar-container":"hide"}>
              
            <div className="acme-container">
              <p className="acme-style">ACME</p>
            </div>
            <div className="home-container">
                
                    <img src={icons} alt="icons" className="home-icon"/>
                
                <p className="side-bar-item">Home</p>
            </div>
            <div className="dashboard-container">
                <img src={icons} alt="icons" className="dashboard-icon"/>
                <p className="side-bar-item">Dashboard</p>
            </div>
            <div className="inbox-container">
              <img src={icons} alt="icons" className="inbox-icon"/>
              <p className="side-bar-item">Inbox</p>
            </div>
            <div className="products-container">
              <img src={icons} alt="icons" className="products-icon"/>
              <p className="side-bar-item">Products</p>
            </div>
            <div className="admin-container">
              <img src={icons} alt="icons" className="admin-icon"/>
              <p className="side-bar-item">Admin</p>
            </div>
            </div>
   
    
  )
}

export default SideBar