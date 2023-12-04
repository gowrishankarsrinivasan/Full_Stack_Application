// import React, { useState } from "react";
// import "./billing.css";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

// import { Link } from "react-router-dom";

// const Billing = () => {
//   const [productName, setProductName] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [paymentMade, setPaymentMade] = useState(false);

//   const handleProductNameChange = (e) => {
//     setProductName(e.target.value);
//   };

//   const handleProductQuantityChange = (e) => {
//     setProductQuantity(e.target.value);
//   };

//   const handleProductPriceChange = (e) => {
//     setProductPrice(e.target.value);
//   };

//   // const handleAddItem = () => {
//   //   const newItem = {
//   //     productName,
//   //     productQuantity: parseInt(productQuantity),
//   //     productPrice: parseInt(productPrice),
//   //     total: parseInt(productQuantity) * parseInt(productPrice),
//   //   };
//   //   setItems([...items, newItem]);
//   //   setProductName("");
//   //   setProductQuantity("");
//   //   setProductPrice("");
//   // };

//   // const handleDeleteItem = (index) => {
//   //   const updatedItems = [...items];
//   //   updatedItems.splice(index, 1);
//   //   setItems(updatedItems);
//   // };

//   const calculateTotal = () => {
//     let totalAmount = 0;

//     items.forEach((item) => {
//       totalAmount += item.total;
//     });

//     return totalAmount.toFixed(2);
//   };

//   // const handlePay = () =>{
//   //   if(!paymentMade&&items.length>0){
//   //     axios.post("http://127.0.0.1:8080/postPay",items)
//   //     .then((response)=>{
//   //       window.print();
//   //       setItems([]);
//   //       setPaymentMade(true);
//   //     })
//   //     .catch((error)=>{
//   //       console.log(error.message);
//   //     })
//   //   }
//   // }

//     const handlePrint = () => {
//       window.print();
//     };

//     const dispatch = useDispatch();

//     const items = useSelector((state) => state.items);

//     const handleAddItem = () => {
//       const newItem = {
//         productName,
//         productQuantity: parseInt(productQuantity),
//         productPrice: parseInt(productPrice),
//         total: parseInt(productQuantity) * parseInt(productPrice),
//       };
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       // ...
//     };

//     const handleDeleteItem = (index) => {
//       dispatch({ type: "DELETE_ITEM", payload: index });
//     };

//     // ...
//   };

//   return (
//     <div className="billing-container-amount">
//       <div className="billing-container">
//         <div className="billing-container-heading">
//           <h3>Product bill</h3>
//         </div>
//         <div className="billing-container-heading-body">
//           <input
//             type="text"
//             name="productName"
//             placeholder="Enter productName"
//             value={productName}
//             onChange={handleProductNameChange}
//           />
//           <input
//             type="text"
//             name="productQuantity"
//             placeholder="Enter productQuantity"
//             value={productQuantity}
//             onChange={handleProductQuantityChange}
//           />
//           <input
//             type="text"
//             name="productPrice"
//             placeholder="Enter productPrice"
//             value={productPrice}
//             onChange={handleProductPriceChange}
//           />
//           <button type="submit" onClick={handleAddItem}>
//             Add Items
//           </button>
//         </div>
//         <div className="billing-container-table">
//           <table style={{ padding: "30px" }}>
//             <thead>
//               <tr>
//                 <th style={{ padding: "30px" }}>Product Name</th>
//                 <th style={{ padding: "30px" }}>MRP</th>
//                 <th style={{ padding: "30px" }}>Quantity</th>
//                 <th style={{ padding: "30px" }}>Total</th>
//                 <th style={{ padding: "30px" }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.productName}</td>
//                   <td>Rs {item.productPrice}</td>
//                   <td>{item.productQuantity}</td>
//                   <td>Rs {item.total}</td>
//                   <td>
//                     <button onClick={() => handleDeleteItem(index)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="billing_totals">
//           Total: Rs {calculateTotal()}
//           <Link className="billing_btn" onClick={handlePrint}>Generate Invoice</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Billing;

import React, { useState } from "react";
import "./billing.css";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { Link } from "react-router-dom";
import axios from "axios";

const Billing = () => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const dispatch = useDispatch(); // Use useDispatch to dispatch actions
  const items = useSelector((state) => state.items); // Use useSelector to access the items array from the Redux store
  // const productItems = useSelector((state) => state.productItems); // Use useSelector to access the items array from the Redux store

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const calculateTotal = () => {
    let totalAmount = 0;
    items.forEach((item) => {
      totalAmount += item.total;
    });
    localStorage.setItem("totalAmount", totalAmount);
    return totalAmount.toFixed(2);
  };

  const handleAddItem = () => {
    const newItem = {
      productName,
      productQuantity: parseInt(productQuantity),
      productPrice: parseInt(productPrice),
      total: parseInt(productQuantity) * parseInt(productPrice),
    };  
    const inventoryUpdate = {
      productName,
      productQuantity: parseInt(productQuantity),
    }
    dispatch({ type: "ADD_ITEM", payload: newItem });
    dispatch({ type: "ADD_PRODUCT_ITEMS", payload: inventoryUpdate });
  };

  const handleDeleteItem = (index) => {
    dispatch({ type: "DELETE_ITEM", payload: index });
  };

  const handleSubmit = (e) => {
    // axios.post("http://127.0.0.1:8080/postPay", items);
    e.preventDefault();
  };
  
  return (
    <div className="billing-container-amount">
      <div className="billing-container">
        <div className="billing-container-heading">
          <h3>Product bill</h3>
        </div>
        <div className="billing-container-heading-body">
          <input
            type="text"
            name="productName"
            placeholder="Enter productName"
            value={productName}
            onChange={handleProductNameChange}
          />
          <input
            type="text"
            name="productQuantity"
            placeholder="Enter productQuantity"
            value={productQuantity}
            onChange={handleProductQuantityChange}
          />
          <input
            type="text"
            name="productPrice"
            placeholder="Enter productPrice"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
          <button type="submit" onClick={handleAddItem}>
            Add Items
          </button>
        </div>
        <div className="billing-container-table">
          <table style={{ padding: "30px" }}>
            <thead>
              <tr>
                <th style={{ padding: "30px" }}>Product Name</th>
                <th style={{ padding: "30px" }}>MRP</th>
                <th style={{ padding: "30px" }}>Quantity</th>
                <th style={{ padding: "30px" }}>Total</th>
                <th style={{ padding: "30px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.productName}</td>
                  <td>Rs {item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td>Rs {item.total}</td>
                  <td>
                    <button onClick={() => handleDeleteItem(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="billing_totals">
          Total: Rs {calculateTotal()}
          <button onClick={handleSubmit} className="billing_btn">
            <Link to="/invoice" >
              Generate Invoice
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
