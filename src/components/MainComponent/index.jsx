import React from 'react'
import './index.css'
import Statistics from '../Statistics'
import UserProfile from '../UserProfile'
import profile from '../../Images/profile-pic-01.jpg'
import VideoPlayer from '../VideoPlayer'
import SideBar from '../SideBar'
import {useState} from 'react'
import DataTable from '../DataTable'
import LineChart from '../LineChart'
import icons from '../../Images/icons.gif'
import user1 from '../../Images/user1.jpeg'
import user2 from '../../Images/user2.jpeg'
import user3 from '../../Images/user3.jpeg'
import add from '../../Images/add.png'

const MainComponent = ()=> { 

    const [toggle, setToggle] = useState(false)
    const [showorhide, setDisplayProfile] = useState(true)
    const [showNote, setNote] = useState(true)

    const toggleSideBar = () => {
        setToggle(s => !s)
        
    }

    const displayProfile = () => {
        setDisplayProfile(x=>!x)
    }

    const showNotification = () => {
            setNote(y=>!y)
    }

  return(
    
        

        <div className="main-component">
        <SideBar x={toggle}/>
        <div className="search-main-conatiner">
        <div className={toggle?"shrink-search-container":"search-container"}>
            <div className="search-container-1">
                <p className="button-container-bars" onClick={toggleSideBar}>
                <img src ={icons} alt="icons" className="toggle-icon"/>
                </p>
                <p className="s-container">
                <img src ={icons} alt="icons" className="search-icon"/>
                </p>
                <p className="text-container">Search transactions, invoices or help</p>
            </div>
            <div className="search-container-1">
                <p className="button-container" onClick={showNotification}>
                    <img src ={icons} alt="icons" className="notification-icon"/>
                </p>
                <p className="name-container" onClick={displayProfile}>John Doe</p>
                <img src={icons} alt="icons" className={showorhide?"flip-arrow-icon":"arrow-icon"}/>
                <img src={profile} alt="" className="img-container" onClick={displayProfile}/>
                
            </div>
            
        </div> 

        <div  className={showNote?"hide-notifications-container":"notifications-container"}>        
            <div className="align-notification-item">
                <img src={user1} alt="" className="user-profile"/>
                <div className="align-msg">
                    <p className="username">Drew James</p>
                    <p className="notification-msg">Assigned you on the call with Sara</p>
                </div>
                <p className="notification-time">2 min ago</p>
            </div>
            <div className="align-notification-item">
                <img src={user2} alt="" className="user-profile"/>
                <div className="align-msg">
                    <p className="username">Bavid Kames</p>
                    <p className="notification-msg">Marked the task New UI as done</p>
                </div>
                <p className="notification-time">5 min ago</p>
            </div>
            <div className="align-notification-item">
                <img src={user3} alt="" className="user-profile"/>
                <div className="align-msg">
                    <p className="username">Lavid Emes</p>
                    <p className="notification-msg">Added a new comment on Sales task</p>
                </div>
                <p className="notification-time">10 min ago</p>
            </div>
            <p className="show-more">Show More</p>
        </div>

                <div className={showorhide?"hide-profile-data":"profile-data"}>
                    <div className="profile-data-item1"> 
                        <img src={icons} alt="icons" className="my-profile-icon"/>
                        <p className="my-profile-text">My Profile</p>
                    </div> 
                    <div className="profile-data-item2"> 
                        <img src={icons} alt="icons" className="billing-icon"/>
                        <p className="my-profile-text">Billing</p>
                    </div>  
                    <div className="profile-data-item3"> 
                        <img src={icons} alt="icons" className="logout-icon"/>
                        <p className="my-profile-text">Logout</p>
                    </div>                    
                </div>

        <div className={toggle?"shrink-main-content":"main-content"}>
                
            <p className="overview">Overview</p>
            <div className="add">
                <p className="add-funds-text"> Add Funds</p>
                <img src={add} className="add-icon"/>
            </div>
            
        </div>    
        
        <div className="align-components">
            <div className="line-dough-table">
                <div className="style-line-dough">
                    <LineChart x={toggle}/>
                    <Statistics x={toggle}/>
                </div>            
                <DataTable x={toggle}/>
            </div>
            <div className="profile-video-style">
                <UserProfile x={toggle}/>
                <VideoPlayer x={toggle}/>
            </div>

        </div>

        <div className="align-mobile-components">
                <UserProfile/>
                <LineChart />
                <Statistics />
                <DataTable />
                <VideoPlayer />
        </div>

       
        </div>
        
    </div>
    
    
  )
}

export default MainComponent