import React from "react";

const OrderSummary = ({ ingredients, total }) => (
  <>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {ingredients.map(({ type, amount }, index) => (
        <li key={index}>
          {type}: x{amount}
        </li>
      ))}
    </ul>
    <p>Total price: ${total.toFixed(2)}</p>
  </>
);

export default OrderSummary;
