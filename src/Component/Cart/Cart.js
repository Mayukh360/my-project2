import React from 'react'
import Modal from '../Modal/Modal'

export default function Cart(props) {
  return (
    <Modal onHide={props.onHide}>
    
    <div >
      <span>Total</span>
      <span>300₹</span>
    </div>
    <div >
      <button onClick={props.onHide} >
        Close
      </button>
       <button >Order</button>
    </div>
  </Modal>
  )
}
