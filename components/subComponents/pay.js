import React, { useEffect, useState } from "react";
import "../subComponents/pay.css";


const Payment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="payment_container">
      <div className={`payment_container-centered ${isVisible ? "visible" : ""}`}>
        <div className="payment_container-header">
          <h1>Pay Invoice</h1>
        </div>
        <div className="payment_container-image">
        </div>
        <div className="payment_container-details">
          <label>Name on card</label>
          <input type="text"></input>
          <label>Card number</label>
          <input type="text"></input>
          <div className="payment_container-details-container-data">
            <div className="pay_left">
              <label>Expiry date</label>
              <input type="text"></input>
            </div>
            <div className="Pay_right">
              <label>Security code</label>
              <input type="text"></input>
            </div>
          </div>
          <label>ZIP/Postal code</label>
          <input type="text"></input>
          <button className="pay_button_card">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
