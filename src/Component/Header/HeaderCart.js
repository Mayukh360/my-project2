import React from 'react'

export default function HeaderCart(props) {
  return (
    <button onClick={props.onShow} >
        
        <span>Your Cart</span>
        <span >2</span>
      </button>
  )
}
