import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./actions/cartAction";
import logo from "./logo.svg";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart" style={{ backgroundColor: "red" }}>
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        <img src={`https://sanoojzc.github.io/${logo}`} />
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
