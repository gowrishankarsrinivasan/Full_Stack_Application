import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import productData from "./productData";

function ProductCatalog() {

  const [products, setProducts] = useState([]);

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

  return (
    <div className="product-catalog-container">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;



