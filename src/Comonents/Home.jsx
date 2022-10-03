import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img "
          src="/Pictures/pic1.jpg"
          alt="Card image"
          height="675px"
        />
        <div className="card-img-overlay    ">
          <div className="container"> 
            <h5 className="card-title display-3 fw-bold lead">New Season Arrivals</h5>
            
            <p className="card-text lead fs-2">Do Check Out All The New Trends ...</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
