import React, { useState } from "react";
import "../components/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "POSTEMAIL", payload: email });
    dispatch({ type: "POSTPASSWORD", payload: password });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        }
      );

      dispatch({ type: "POSTEMAIL", payload: email });
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.error("Error: ", error);
      alert("User not found. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <div className="column-1">
        <div className="column1-detail">
          <h4>Don't you have an account?</h4>
          <div className="form-link">
            <Link to="/Signup" className="form-link-a">
              Signup
            </Link>
          </div>
          <h1>Welcome</h1>
        </div>
      </div>
      <div className="column-2">
        <form onSubmit={handleSubmit}>
          <div className="form-input-group">
            <div className="input-group1">
              <div className="form-input1">
                <FaUser className="formIcons" />
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleChangeUserName}
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="input-group1">
              <div className="form-input1">
                <RiLockPasswordFill className="formIcons" />
                <input
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
              <br />
            </div>
            <div className="input-submit">
              <button className="form-input-btn2" type="submit">
                <strong>Login</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
