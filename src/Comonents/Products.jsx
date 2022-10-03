import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const getProducts = async () => {
    setLoading(true);
    let response = await fetch(`https://fakestoreapi.com/products/`);
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      console.log(filter);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
        {/* imported from npm i react-loading-skeleton to show while loading */}
            <Skeleton height={350}/> 
        </div>
        <div className="col-md-3">
 
            <Skeleton height={350}/> 
        </div>
        <div className="col-md-3">
      
            <Skeleton height={350}/> 
        </div>
        <div className="col-md-3">
      
            <Skeleton height={350}/> 
        </div>
      </>
    );
  };
  const filterProduct=(cat)=>{
    const updatelist =data.filter((x)=>x.category === cat);
    setFilter(updatelist);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((ele) => {
          return (
            <>
              <div className="col-md-3 mb-3 shadow"  key={ele.id}>
                <div className="card h-100 text-center p-4">
                  <img
                    className="card-img-top" height='250px' 
                    src={ele.image}
                    alt={ele.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{ele.title.substring(0,12)}</h5>
                    <p className="card-text">${ele.price}</p>
                    <NavLink to={`/Products/${ele.id}`} className="btn btn-outline-info">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
