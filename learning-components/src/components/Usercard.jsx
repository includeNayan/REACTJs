import React from 'react'
import pic from '../assets/leetcodelogo.webp'
import "./Usercard.css"



const Usercard = () => {
  return (
    <div className='container'>
      <p id='name'>Nayan</p>
      <img id='userimg' src={pic} alt="love" />
      <p id='desc'>Description of Components</p>
    </div>
  )
}

export default Usercard
