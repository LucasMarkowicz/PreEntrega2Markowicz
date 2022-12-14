import React from "react";


export default function Cartwidget() {
  return (
    <div className='cart-container'>
      <a href="#cart" className="notification">
        <img src="../public/images/cart.png"></img>
        <span class="badge">3</span>
      </a>
    </div>
  );
}