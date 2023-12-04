  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { FaBars } from "react-icons/fa";

  import Home from "../home";
  import Contact from "./contact";
  import About from "./About";
  import Profile from "./profile";
  import Product from "./product";
  import Billing from "./billing";
 import ProductCatalog from "./productCatalog";
  import "./nav.css";
  import Pay from "./pay";
  import Dealer from "./PurchasingForm";
  import { useNavigate } from "react-router-dom";

  import { useDispatch } from "react-redux";


  export default function Container() {
    const navigate = useNavigate();
    const handleLogout = () => {
      dispatch({type: "LOGOUT"});
      navigate("/");
    }

    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className="Container-fluid">
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              <FaBars />
            </button>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/aboutUs">About us</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
          </div>
          <div class="nav-items-buttonsLike">
            <button onClick={handleLogout}>Log out</button>
          </div>
        </nav>
        </div>

        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <button className="close-sidebar" onClick={toggleSidebar}>
            &times;
          </button>
          <ul className="sidebar-content">
            <li>
              <Link to="/product">Inventory</Link>
            </li>
            <li>
              <Link to="/catalog">Product Catalog</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/billing">Billing</Link>
            </li>
          </ul>
        </div>

        <div>
          {(() => {
            if (window.location.pathname === "/home") {
              return <Home />;
            }
            if (window.location.pathname === "/profile") {
              return <Profile />;
            }
            if (window.location.pathname === "/aboutUs") {
              return <About />;
            }
            if (window.location.pathname === "/contact") {
              return <Contact />;
            }
            if (window.location.pathname === "/product") {
              return <Product />;
            }
            if (window.location.pathname === "/billing") {
              return <Billing />;
            }
            if (window.location.pathname === "/pay") {
              return <Pay />;
            }
            if (window.location.pathname === "/dealer") {
              return <Dealer />;
            }
            if (window.location.pathname === "/catalog") {
              return <ProductCatalog />;
            }
          })()}
        </div>
      </div>
    );
  }
