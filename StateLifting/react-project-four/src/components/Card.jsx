import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=> props.setName(e.target.value)} />
      <p>State variable name inside card: {props.name} </p>
    </div>
  )
}

export default Card
