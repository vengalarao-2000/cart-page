import React from 'react'

const QuantityContainer = ({id, quantity, handleQuantityChange}) => {
  return (
    <div style={{display: "flex"}}>
        <button onClick = {() => {
            let newValue = quantity - 1;
            handleQuantityChange(id, newValue)
        }}>-</button>
        <p>{quantity}</p>
        <button onClick = {() => {
            let newValue = quantity + 1;
            handleQuantityChange(id, newValue)
        }}>+</button>
    </div>
  )
}

export default QuantityContainer