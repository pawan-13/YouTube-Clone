import React from  'react';
import PlayVideo from "../../Components/playVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import './Video.css'
const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  )
}
export default Video;