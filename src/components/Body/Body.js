import React from 'react'
import './Body.css'
import coder from '../../pics/coder.png'

function Body() {
  return (
    <div className='body'>
      
      <div className='first'>
          <div className='first_first'>
              <h1 id='hiThere'>
                Hi, There
              </h1>
              <h1 id='namaste'>
                I am Archit Soni, नमस्ते!!
              </h1>
          </div>

          <div className='first_second'>
              <h1 id='iam'>
                I am a Full-Stack Developer and Data Scientist
              </h1>
          </div>

      </div>

      <div className='second'>
          <img id='img1' src={coder}/>
      </div>

      <div className='third'>
          <h1>To know more, go to Projects or About or CLICK on my Profile Picture 😇</h1>
      </div>
    
    </div>
  )
}

export default Body