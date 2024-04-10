import React, { useState } from "react";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";

const menu = [
  { id: 1, label: "Noodles", price: 70, quantity: 0 },
  { id: 2, label: "Biryani", price: 170, quantity: 0 },
  { id: 3, label: "Lays", price: 15, quantity: 0 },
];

const CartContainer = () => {
  const [items, setItems] = useState(menu);

  const handleQuantityChange = (id, newValue) => {
    let updatedItems = items.map((element) => {
      return element.id === id ? { ...element, quantity: newValue } : element;
      // if(element.id === id){
      //     let updatedQuantityElement = {...element, quantity: newValue};
      //     return updatedQuantityElement;
      // }
      // else {
      //     return element;
      // }
    });
    setItems(updatedItems);
  };

  const totalAmount = items.reduce((total, element) => {
    return total + element.price * element.quantity;
  }, 0);

  return (
    <>
      {items.map((element) => (
        <CartItem
          key={element.id}
          {...element}
          handleQuantityChange={handleQuantityChange}
          totalAmount
        />
      ))}
      <TotalPrice totalAmount={totalAmount} />
    </>
  );
};

export default CartContainer;
