// Profile.js
import React, { useState } from "react";
import img from "../Images/evie-s-TNacNuuEl1o-unsplash.jpg";
import "./profile.css"; // Import the CSS file

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    Employee_ID: 1,
    Role: "Admin",
    Email_Address: "john@example.com",
    Phone_Number: "1234567890",
    age: "20",
    profilePicture: img,
  });

  const [profileImg, setProfileImg] = useState(userData.profilePicture);

  const addImage = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setProfileImg(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="gradient-container"></div>
        <div className="profile-image">
          <img src={userData.profilePicture} />
        </div>
        <div className="profile-cotent">
        <h1 style={{textAlign:"center"}}>{userData.name}</h1>
        <p>{userData.Employee_ID}</p>
        <p>{userData.age}</p>
        <p>{userData.Role}</p>
        <p>{userData.Email_Address}</p>
        <p>{userData.Phone_Number}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
