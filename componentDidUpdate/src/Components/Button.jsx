import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onClick}>Update</button>
    </div>
  )
}

export default Button