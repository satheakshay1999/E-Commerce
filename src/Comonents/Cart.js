import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import {deletefromcart} from "../Redux/Actions/index";
import { deleteItem } from "../Redux1/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch(state);
  const handClose = (item) => {
    dispatch(deleteItem(item));
  };
  const CartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              className="btn btn-close float-end "
              aria-label="close"
              onClick={() => handClose(cartItem)}
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  width="180px"
                ></img>
              </div>
              <div className="col-md-4">
                <h3>Price : ${cartItem.price}</h3>
                <p>{cartItem.description.slice(0, 150)}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="row">
              <h1>Your Cart is Empty !!</h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  const button = () => {
    return (
      <>
        {/* <button className='btn btn-primaray' ></button> */}
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-info letter-spacing-10"
            >
              Proceed to CheckOut{" "}
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(CartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
