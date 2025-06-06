import React from 'react'

const Button = (props) =>{
  return (
    <div>
      {props.children}
      {/* accessing function by children */}
      <button onClick={props.click}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
