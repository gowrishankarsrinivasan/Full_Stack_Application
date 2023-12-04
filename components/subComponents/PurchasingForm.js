import React, { useEffect, useState } from "react";
import "./PurchasingForm.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Dealer() {
  // State Hooks
  const [supplierName, setSupplierName] = useState("");
  const [date, setDate] = useState("");

  const restockedProductsItems = useSelector(
    (state) => state.restockedProducts
  );
  console.log(restockedProductsItems);

  // Custom Hook for useDispatch
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let total = 0;
    restockedProductsItems.forEach((items) => {
      total += parseInt(items.total) * parseInt(items.requiredQuantity);
    });
    return total;
  };

  //  const price =()=>{
  //   let price =0;

  //  }
  const handleSupplierNameChange = (e) => setSupplierName(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  // Handle Cancel button click
  const handleCancel = () => {
    window.history.go(-1);
  };

  // Handle Pay button click
  const handlePay = () => {
    dispatch({ type: "PAID" });
    navigate("/pay");
  };

  // Navigate Hook
  const navigate = useNavigate();

  return (
    <div className="dealer-container">
      <h2>Inventory Restocking</h2>
      <div className="Dealer-container-input-container">
        <input
          type="text"
          name="supplierName"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={handleSupplierNameChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
          style={{ marginRight: "9px" }}
        />
      </div>
      <table className="dealer-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity Restocked</th>
          </tr>
        </thead>
        <tbody>
          {restockedProductsItems.map(
            ({ productName, requiredQuantity }, index) => (
              <tr key={index}>
                <td>{productName}</td>
                <td>{requiredQuantity} kg</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className="dealer-button">
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <p>Total:{calculateTotalPrice()}</p>
        <button type="button" onClick={handlePay}>
          Pay
        </button>
      </div>
    </div>
  );
}
