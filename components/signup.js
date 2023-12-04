// import React, { useState } from "react";
// import "./signup.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Signup() {
//   const [first_name, setfirst_name] = useState("");
//   const [last_name, setlast_name] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleChangesetfirst_name = (e) => {
//     setfirst_name(e.target.value);
//   };
//   const handleChangesetlast_name = (e) => {
//     setlast_name(e.target.value);
//   };
//   const handleChangeContact = (e) => {
//     setContact(e.target.value);
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handlePassword = (password) => {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*()]/.test(password);
//     return (
//       password.length >= minLength &&
//       hasUpperCase &&
//       hasLowerCase &&
//       hasNumber &&
//       hasSpecialChar
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       first_name: first_name,
//       last_name: last_name,
//       contact: contact,
//       email: email,
//       password: password
//     };

//     if (!handlePassword(password)) {
//       alert("Please enter a strong password combination");
//     } else {
//       try {
//         await axios.post("http://127.0.0.1:8080/register", data);
//         navigate("/home");
//       } catch (error) {
//         if(error.response.status===409 && error.response){
//           alert("User already exists with the provided email. Please login.");
//         }
//        alert("An error occurred during registration:");
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <div className="signup-form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="signup-form-container-input">
//             <h1>Register here</h1>
//             <div className="signup-form-container-input-name">
//               <input
//                 required
//                 name="first_name"
//                 type="text"
//                 placeholder="first name"
//                 value={first_name}
//                 onChange={handleChangesetfirst_name}
//               />
//               <input
//                 required
//                 name="last_name"
//                 type="text"
//                 placeholder="last_name"
//                 value={last_name}
//                 onChange={handleChangesetlast_name}

//               />
//             </div>
//             <input
//               required
//               name="mobileNumber"
//               type="tel"
//               placeholder="Contact Number"
//               value={contact}
//               onChange={handleChangeContact}
//             />
//             <input
//               required
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleChangeEmail}
//             />
//             <input
//               required
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handleChangePassword}
//             />
//             <button className="btn">
//               <strong>Submit</strong>
//             </button>
//             <Link to="/" className="signup-link">
//               <strong>Already have an account?Login</strong>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangesetfirst_name = (e) => {
    setfirst_name(e.target.value);
  };
  const handleChangesetlast_name = (e) => {
    setlast_name(e.target.value);
  };
  const handleChangeMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handlePassword = (password) => {
  //   const minLength = 8;
  //   const hasUpperCase = /[A-Z]/.test(password);
  //   const hasLowerCase = /[a-z]/.test(password);
  //   const hasNumber = /\d/.test(password);
  //   const hasSpecialChar = /[!@#$%^&*()]/.test(password);
  //   return (
  //     password.length >= minLength &&
  //     hasUpperCase &&
  //     hasLowerCase &&
  //     hasNumber &&
  //     hasSpecialChar
  //   );
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     first_name: first_name,
  //     last_name: last_name,
  //     email: email,
  //     mobileNumber: mobileNumber,
  //     password: password,
  //   };

  //   if (!handlePassword(password)) {
  //     alert("Please enter a strong password combination");
  //   } else {
  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8181/api/v1/auth/register",data);

  //       if (response.status === 403) {
  //         navigate("/home");
  //         setfirst_name("");
  //         setlast_name("");
  //         setMobileNumber("");
  //         setEmail("");
  //         setPassword("");
  //       }
  //     } catch (error) {
  //       console.error("Error: ", error);
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/register",
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          mobilenumber: mobileNumber,
          password: password,
        }
      );

      if (response.status === 200) {
        navigate("/");
        setfirst_name("");
        setlast_name("");
        setMobileNumber("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="signup-form-container-input">
            <h1>Register here</h1>
            <div className="signup-form-container-input-name">
              <input
                required
                name="first_name"
                type="text"
                placeholder="first name"
                value={first_name}
                onChange={handleChangesetfirst_name}
              />
              <input
                required
                name="last_name"
                type="text"
                placeholder="last_name"
                value={last_name}
                onChange={handleChangesetlast_name}
              />
            </div>
            <input
              required
              name="mobileNumber"
              type="tel"
              placeholder="Contact Number"
              value={mobileNumber}
              onChange={handleChangeMobileNumber}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn">
              <strong>Submit</strong>
            </button>
            <Link to="/" className="signup-link">
              <strong>Already have an account?Login</strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
