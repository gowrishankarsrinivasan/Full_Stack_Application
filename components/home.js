import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-Containerfull">
      <div className="home-Container">
        <div className={`home-container-body ${isVisible ? "visible" : ""}`}>
          <div className="home-container-body-h1">
            <span>Unlock the </span>
            <br />
            <span>Power of Efficiency</span>
          </div>
          <div className="home-container-body-h4">
            <p>Streamline and Optimize Your Supermarket</p>
            <p>Operations with Ease.</p>
          </div>
          <div className="home-container-body-links">
            <Link
              to="/product"
              className="home-container-btn-link"
              style={{ borderRadius: "60px" }}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-row">
            <div className="first-row">
              <div className="first-text">
                <h4>find us</h4>
                <span>bk pudur,kuniyamuthur,coimbatore</span>
              </div>
            </div>
            <div className="first-row">
              <div className="first-text">
                <h4>Call us</h4>
                <span>7538875486</span>
              </div>
            </div>
            <div className="first-row">
              <div className="first-text">
                <h4 style={{ marginLeft: "20px" }}>Mail us</h4>
                <span>gowrishankarsrinivasan3@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
