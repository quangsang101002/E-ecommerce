import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./Products.scss";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterSearchProduct = (input) => {
    const UpdateList = data.filter((x) => {
      return x.title.toLowerCase().includes(input);
    });
    console.log("updatedata", UpdateList);
    setFilter(UpdateList);
  };

  const updateProduct = (cart) => {
    const listProduct = data.filter((x) => x.category === cart);
    setFilter(listProduct);
  };
  const ShowProduct = () => {
    const [searchProducts, setSearchProduct] = useState("");
    return (
      <>
        <div className="product_wrapper">
          <button className=" btn button_add" onClick={() => setFilter(data)}>
            Add
          </button>
          <button
            className=" btn button_menClothing"
            onClick={() => updateProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className=" btn button_womenClothing"
            onClick={() => updateProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className=" btn button_jewelery"
            onClick={() => updateProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className=" btn button_electronic"
            onClick={() => updateProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="test">
          <div className="Product_search">
            <input
              className="Product_search-input"
              onChange={(e) => setSearchProduct(e.target.value.toLowerCase())}
            />

            <AiOutlineSearch
              className="Product_search-productDetail"
              onClick={() => filterSearchProduct(searchProducts)}
            />
          </div>
        </div>
        <div className="grid-row">
          {filter.map((product) => {
            return (
              <>
                <div className="grid-colum">
                  <div className="wrapper_product" key={product.id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.title}
                      height="250px "
                    ></img>
                    <div className="product_cart-body">
                      <h5 className="product_headline">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="product_price">${product.price}</p>
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="product_button"
                    >
                      buy now
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <ShowProduct />
    </>
  );
}

export default Products;
