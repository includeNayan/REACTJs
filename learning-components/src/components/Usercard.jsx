import React from 'react'
import pic from '../assets/leetcodelogo.webp'
import "./Usercard.css"


// this is a user defined components which we have created
const Usercard = () => {
  return (
    <div className='container'>
      <p id='name'>Nayan</p>
      <img id='userimg' src={pic} alt="love"></img>
      <p id='desc'>Description of Components</p>
    </div>
  )
}

export default Usercard
