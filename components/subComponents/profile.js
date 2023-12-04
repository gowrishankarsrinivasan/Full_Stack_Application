import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./profile.css"; // Import the CSS file
import img from "../images/profile.jpg"; // Import the profile image
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // State to store the logged-in user's details
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Fetch email from the Redux store
  const email = useSelector((state) => state.email);

  // Get the user data from local storage
  const userFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUser"));

  // Fetch profile data from the API when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8181/api/v1/auth/email"
        );
        const userDetails = response.data;
        if (userDetails) {
          const loggedInUserDetails = userDetails.find(
            (user) => user.email === email
          );
          setLoggedInUser(loggedInUserDetails);
          // Save the fetched user data to local storage
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(loggedInUserDetails)
          );
        }
      } catch (error) {
        alert(error.message);
      }
    };

    // If user data is available in local storage, set it in the state
    if (userFromLocalStorage) {
      setLoggedInUser(userFromLocalStorage);
    } else {
      // If not, fetch it from the API
      fetchProfileData();
    }
  }, [email]);

  // Event handlers for input field changes
  const handleChangeFirstName = (e) => {
    setLoggedInUser({ ...loggedInUser, first_name: e.target.value });
  };

  const handleChangeLastName = (e) => {
    setLoggedInUser({ ...loggedInUser, last_name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setLoggedInUser({ ...loggedInUser, email: e.target.value });
  };

  const handleChangeMobileNumber = (e) => {
    setLoggedInUser({ ...loggedInUser, mobilenumber: e.target.value });
  };

  // Event handler for the "Save" button
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8181/api/v1/auth/${loggedInUser.id}`
      );
      alert("User deleted successfully!");
    } catch (error) {
      alert("User deleted successfully!.");
      navigate("/");
    }
  };
  const handleSave = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8181/api/v1/auth/update/${loggedInUser.id}`,
        loggedInUser
      );
      alert("User Updated successfully!");
    } catch (error) {
      alert("updated successfully!");
    }
  };

  return (
    <div>
      {loggedInUser && (
        <div className="profile_container">
          <div className="profile_center">
            <div className="profile_img_card">
              <img
                src={img}
                alt="profileImage"
                style={{ height: "200px", borderRadius: "200px" }}
              />
              <label className="profile_input_image_label">Profile Image</label>
            </div>
            <div className="profile_section">
              <div className="profile_section_input">
                <label>first_name</label>
                <input
                  type="text"
                  value={loggedInUser.first_name}
                  className="profile_input"
                  onChange={handleChangeFirstName}
                />
              </div>
              <div className="profile_section_input">
                <label>last_name</label>
                <input
                  type="text"
                  value={loggedInUser.last_name}
                  className="profile_input"
                  onChange={handleChangeLastName}
                />
              </div>
              <div className="profile_section_input">
                <label>email</label>
                <input
                  type="email"
                  value={loggedInUser.email}
                  className="profile_input"
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="profile_section_input">
                <label>contact</label>
                <input
                  type="tel"
                  value={loggedInUser.mobilenumber}
                  className="profile_input"
                  onChange={handleChangeMobileNumber}
                />
              </div>
            </div>
            <div className="profile_save_Button">
              <button className="save_button" onClick={handleSave}>
                Save
              </button>
              <button className="save_button" onClick={handleDelete}>
                delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
