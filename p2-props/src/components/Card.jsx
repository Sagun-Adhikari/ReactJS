import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src={props.img}  alt="no image"/>
        <h1>{props.name}</h1>
        <h2>age: {props.age}</h2>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card