

import ReactPlayer from 'react-player'
import {useState} from 'react'

import './index.css'
import icons from '../../Images/icons.gif'
import thumbnail from '../../Images/video thumbnail.png'
const videoURL = 'https://youtu.be/Oy6hk6Y7VHQ'



const VideoPlayer =(props) => {
  
  const {x} = props
  const [isPlaying, setIsplaying] = useState(false)
 

  const onClickPlay = () => {
   setIsplaying(s=>!s)
  }

  
    
    return (
             
      <div className={x?"shrink-player-container":"player-container"}>
      <div className="product">
        <p className="p-video">Product Video</p>
        <p className="threedots-2">
          <img src={icons} alt="icons" className="threedots-icon"/>
        </p>
      </div>
      <div className="player-wrapper">
      <ReactPlayer url={videoURL} playing={isPlaying} 
              width='295px'
              height='167px' className="react-player"
            
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }} />
      </div>

      <div className={x?"react-player-1":"main-player-wrapper"}>
      <ReactPlayer url={videoURL} playing={isPlaying} 
              width='536px'
              height='248px' className="react-player"
             
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }} />
      </div>
      
      <div className={x?"main-player-wrapper":"react-player-1"}>
      <ReactPlayer url={videoURL} playing={isPlaying} 
              width='440px'
              height='248px' className="react-player"
              
            
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }} />
      </div>
      
    
      
        
    </div>
        
      
    )
  }


export default VideoPlayer