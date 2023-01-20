import React, {useState} from 'react'

const Gif = props => {





  return (
    <div>
      <input id="file" type="file" 
        accept="video/mp4,video/mkv, video/x-m4v,video/*">
      </input>
      <video id="video"></video>
    </div>
  )
}

export default Gif