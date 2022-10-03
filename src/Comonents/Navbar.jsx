import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; 
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  // we get state of all addItem // file name insted of function name 

  const state = useSelector((state)=>state.addItem)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Shop Now
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact us
                </NavLink>
              </li>
             
             
            </ul>
            {/* <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>
                 <Login />Login
                 </NavLink>
            </div> */}
            <div> <Login /></div>
            {/* <div className="buttons">
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>
                 Register
                 </NavLink>
            </div> */}
            <div><Register /></div>
            <div className="buttons">
                <NavLink to="/cart" className="btn btn-outline-dark ms-3">
                <i className="fa fa-shopping-cart me-1"></i>
                 Cart ({state.length})
                 </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;