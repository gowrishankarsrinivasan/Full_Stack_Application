import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import productData from "./productData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Product() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [restockedProducts, setRestockedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/productsDetails"
        );
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const getImageById = (product_id) => {
    const product = productData.find((item) => item.product_id === product_id);
    if (product) {
      return product.image;
    }
    return null;
  };

  const handleRestock = (product) => {
    const requiredQuantity =
      parseInt(product.product_total_availability) -
      parseInt(product.current_product_availability);
    const restockedProduct = {
      productName: product.product_name,
      requiredQuantity: requiredQuantity,
      total:product.product_price,
    };
    setRestockedProducts((prevProduct) => [...prevProduct, restockedProduct]);
    dispatch({ type: "SET_RESTOCKEDPRODUCT_ITEMS", payload: restockedProduct });
  };
  useEffect(() => {
    console.log(restockedProducts);
  }, [restockedProducts]);

  if (restockedProducts.length > 0) {
    localStorage.setItem(
      "restockedProducts",
      JSON.stringify(restockedProducts)
    );
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="box" key={product.product_id}>
          <div className="box-content">
            <div className="image-box">
              <img
                src={getImageById(product.product_id)}
                alt={product.product_name}
                style={{
                  height: "400px",
                  width: "400px",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="image-box-details">
              <div className="image-box-details-info">
                <h3>Fruits</h3>
                <h3>{product.product_name}</h3>
                <p>Price in rupees: {product.product_price}</p>
                <p>
                  Available Quantity: {product.current_product_availability}
                </p>
                <div className="image-box-details-btn">
                  <Link
                    onClick={() => handleRestock(product)}
                    className="product-container-btn"
                  >
                    Restock
                  </Link>
                  <Link to={"/dealer"} className="product-container-btn">
                    Enter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
