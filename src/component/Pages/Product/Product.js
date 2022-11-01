import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Product.scss";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Add product succes", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProducts();
  }, []);

  const ShowProduct = () => {
    return (
      <div className="product_wrapper-detail">
        <img
          src={product.image}
          alt={product.title}
          width="400px"
          height="400px"
        />
        <div className="product_body-detail">
          <h4 className="product_body-category">{product.category}</h4>
          <h1 className="product_body-title">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <AiOutlineStar />
          </p>
          <h3 className="product_body-price">${product.price}</h3>
          <p className="product_body-description">{product.description}</p>
          <button
            className="cart product_body-Add-button"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/products" className="cart product_body-Go-button">
            Go to Cart
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      <ShowProduct />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Product;
