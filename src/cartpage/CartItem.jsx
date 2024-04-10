import React from 'react'
import LabelPrice from './LabelPrice'
import QuantityContainer from './QuantityContainer'

const CartItem = ({id, label, price, quantity, handleQuantityChange}) => {
  return (
    <div style={{display: "flex", gap: "30px"}}>
        <LabelPrice label= {label} price={price}/>
        <QuantityContainer id={id} quantity={quantity} handleQuantityChange={handleQuantityChange}/>
    </div>
  )
}

export default CartItem