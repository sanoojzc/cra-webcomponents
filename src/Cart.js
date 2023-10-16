import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart" style={{ backgroundColor: 'red' }}>
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        <img src="https://img.icons8.com/material-outlined/24/000000/add-shopping-cart--v1.png" />
        Add Item to Cart
      </button>
      <button
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item to Cart
      </button>
    </div>
  );
};

export default Cart;