import React from "react";
import "../subComponents/invoice.css";
import { useSelector } from "react-redux";

const Invoice = () => {
  const CurrentDateTime = () => {
    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString();
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    const time = currentDateTime.toLocaleTimeString([], options);
    return { date, time };
  };

  const items = useSelector((state) => state.items);
  const getamnt = localStorage.getItem('totalAmount');
  

  const { date, time } = CurrentDateTime();

  window.onload = function () {
    window.print();
  };
  return (
    <div className="invoice_container">
      <div className="invoice_center_container">
        <h2>Shop Smart</h2>
        <h1>RECEIPT</h1>
        <div className="shop_informations">
          <div className="shop_informations_left">
            <p>Date:{date}</p>
            <p>time:{time}</p>
            <p>Address:Covai</p>
          </div>
          <div className="shop_informations_right">
            <p>Manager:Shankar</p>
            <p>Terminal#1</p>
          </div>
        </div>
        <div className="invoice-container-table">
          <table style={{ padding: "30px" }}>
            <thead>
              <tr>
                <th style={{ padding: "30px" }}>Product Name</th>
                <th style={{ padding: "30px" }}>MRP</th>
                <th style={{ padding: "30px" }}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="shop_informations">
          <div className="shop_informations_left">
            <p>Total:{getamnt}</p>
          </div>
          <div className="shop_informations_right">
            <p>Manager:Shankar</p>
            <p>Terminal#1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
