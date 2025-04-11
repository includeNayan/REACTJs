import React from 'react'
import pic from '../assets/leetcodelogo.webp'
import "./Usercard.css"


// this is a user defined components which we have created
//passing props in the function
const Usercard = (props) => {
  return (
    <div className='container'>
      {/* accessing props attributes */}
      <p id="name">{props.name}</p>
      <img id='userimg' src={pic} alt="love"></img>
      <p id='desc'>Description of Components</p>
    </div>
  )
}

export default Usercard
