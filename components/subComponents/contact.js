// import { useEffect, useState } from "react";
// import "./contact.css";
// import emailjs from "emailjs-com";
// import { BsGoogle, BsInstagram, BsWhatsapp } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import axios from "axios";

// function Contact() {
//   const [first_name, setFirstName] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [mail, setmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [details, setdetails] = useState("");
//   const email = useSelector((state) => state.email);

//   const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//   };
//   const handleLastName = (e) => {
//     setLastName(e.target.value);
//   };
//   const handlephoneNumber = (e) => {
//     setPhoneNumber(e.target.value);
//   };
//   const handlemail = (e) => {
//     setmail(e.target.value);
//   };
//   const handlemessage = (e) => {
//     setMessage(e.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8181/api/v1/auth/email"
//         );
//         const userDetails = response.data;
//         const user = userDetails.find((user) => user.email === email);
//         if (user) {
//           setdetails(user); // Set the name in the state variable
//           console.log(details);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     fetchData();
//   }, [email]);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_b8q6tsj",
//         "template_g284239",
//         e.target,
//         "hxvGAHtJ_TpLhYRMa"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Email sent successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Error sending email.");
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-container-left">
//         <div className="contact-container-details">
//           <h3 style={{ color: "purple" }}>Contact</h3>
//           {details.last_name ? (
//             <h1>Hlo {details.first_name}</h1>
//           ) : (
//             <p>loading...</p>
//           )}

//           <h1>Let’s Work Together</h1>
//           <h6>Bk pudur Ciombatore,Tamil Nadu</h6>
//           <h5>gowrishankar@2004@gmail.com</h5>
//           <h5>Call:123-456-7890</h5>
//           <div className="about-icons">
//             <BsGoogle className="icon1" />
//             <BsInstagram className="icon2" />
//             <BsWhatsapp className="icon3" />
//           </div>
//         </div>
//       </div>
//       <div className="contact-container-right">
//         <form className="contact-container-form" onSubmit={sendEmail}>
//           <div className="contact-container-username">
//             <input
//               name="from_name"
//               type="text"
//               placeholder="First Name"
//               required
//               value={first_name}
//               onChange={handleFirstName}
//               className="contact-container-username-right-input"
//             />
//             <input
//               name="from_name"
//               type="text"
//               placeholder="Last Name"
//               required
//               value={last_name}
//               onChange={handleLastName}
//               className="contact-container-username-right-input"
//             />
//           </div>
//           <div className="contact-container-input">
//             <input
//               name="from_email"
//               type="email"
//               placeholder="Email*"
//               required
//               value={mail}
//               onChange={handlemail}
//               className="contact-container-input-field"
//             />
//             <br />
//             <input
//               name="from_contact"
//               type="tel"
//               placeholder="Phone no."
//               required
//               value={phoneNumber}
//               onChange={handlephoneNumber}
//               className="contact-container-input-field"
//             />
//             <textarea
//               name="message"
//               id="message"
//               rows={6}
//               placeholder="How can we help?"
//               value={message}
//               onChange={handlemessage}
//               className="contact-container-input-field"
//             />
//           </div>
//           <div className="contact-container-form">
//             <button type="submit" className="contact-container-form-btn">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;





import { useState } from "react";
import "./contact.css";
import { BsGoogle, BsInstagram, BsWhatsapp } from "react-icons/bs";
import axios from "axios";

function Contact() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async () => {
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: mail,
      mobile_number: phoneNumber,
      message: message,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:2020/post",
        data
        );
        if (response) {
        alert("Message saved successfully");
      } else {
        alert("Message not saved successfully");
      }
    } catch (error) {
      console.log("Error saving the message:", error);
      alert("Error saving the message");
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-container">
      <div className="contact-container-left">
        <div className="contact-container-details">
          <h3 style={{ color: "purple" }}>Contact</h3>
          <h1>Let’s Work Together</h1>
          <h6>Bk pudur Coimbatore, Tamil Nadu</h6>
          <h5>gowrishankar@2004@gmail.com</h5>
          <h5>Call: 123-456-7890</h5>
          <div className="about-icons">
            <BsGoogle className="icon1" />
            <BsInstagram className="icon2" />
            <BsWhatsapp className="icon3" />
          </div>
        </div>
      </div>
      <div className="contact-container-right">
        <form className="contact-container-form" onSubmit={handleSubmit}>
          <div className="contact-container-username">
            <input
              name="from_name"
              type="text"
              placeholder="First Name"
              required
              value={first_name}
              onChange={handleFirstName}
              className="contact-container-username-right-input"
            />
            <input
              name="from_name"
              type="text"
              placeholder="Last Name"
              required
              value={last_name}
              onChange={handleLastName}
              className="contact-container-username-right-input"
            />
          </div>
          <div className="contact-container-input">
            <input
              name="from_email"
              type="email"
              placeholder="Email*"
              required
              value={mail}
              onChange={handleMail}
              className="contact-container-input-field"
            />
            <br />
            <input
              name="from_contact"
              type="tel"
              placeholder="Phone no."
              required
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="contact-container-input-field"
            />
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="How can we help?"
              value={message}
              onChange={handleMessage}
              className="contact-container-input-field"
            />
          </div>
          <div className="contact-container-form">
            <button
              type="submit"
              className="contact-container-form-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
