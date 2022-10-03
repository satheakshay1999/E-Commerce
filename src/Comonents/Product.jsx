import React, { useState, useEffect } from "react"; 
import {  useDispatch } from "react-redux";
// import { addtocart } from "../Redux/Actions";
import Skeleton from "react-loading-skeleton";
import {  useParams } from "react-router-dom";
// import { deletefromcart} from '../Redux/Actions/index'
import { addItem , deleteItem } from "../Redux1/actions/index";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addcart , setCartBtn] =useState("Add to cart")
  const dispatch = useDispatch();

// we need to store useDispatch in variable
 
  const addProduct =(product)=>{
    // console.log("added ",product);
    // alert(`${product.title.substring(0,20)} Added to Cart `);
    if(addcart === 'Add to cart' ){
      dispatch(addItem(product));
      setCartBtn("Remove from  cart");
      // dispatch(addtocart(product));  
      }else{
        dispatch(deleteItem(product))
        setCartBtn("Add to cart");
      }
  }

  const getApi = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getApi();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col md-6">
          <Skeleton height={400} />
        </div>
        <div className="col md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-5" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="350px"
          />
        </div>
        <div className="col-md-6 my-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-5 fw-bold">Price: ${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark mx-2 w-100" onClick={()=>addProduct(product)}>{addcart}</button>
          {/* <NavLink className="btn btn-dark">Go to cart</NavLink> */}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
