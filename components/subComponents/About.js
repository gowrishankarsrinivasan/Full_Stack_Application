import React from "react";
import "./About.css";

import img from "../images/profile.jpg";
import { BsGoogle, BsInstagram, BsWhatsapp } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-top">
        <h4>About Shop smart</h4>
        <p>Shop smart is user friendly platform for users</p>
        <p>
          Our mission is to make user to Optimize their Supermarket Operations
          with Ease.{" "}
        </p>
      </div>
      <div className="about-container-body">
        <h4>Need for DX</h4>
        <p>
          Application Programming Interfaces (APIs) have taken the world by
          storm and are now the de facto standard of software communication.
          Almost every software product nowadays consumes APIs. The business
          model of numerous companies around the world relies upon the
          consumption of their APIs. API providers, therefore, strive to
          increase API adoption rates by spending millions of dollars every year
          to improve developer experience. This is usually done by providing
          Software Development Kits (SDKs) and API documentation to developer
          consuming their API(s). Developing SDKs and writing documentation,
          however, are arduous, monotonous and error-prone tasks. It is a slow
          process and costs a lot of time and money.
        </p>
      </div>
      <div className="about-container-body">
        <h4>Our Technology</h4>
        <p>
          While doing research work for their PhDs from the University of
          Auckland in 2014, our founders came across one of the API industry's
          pain points: SDKs. They realized that API providers who spent hundreds
          of thousands of dollars every year on improving developer experience,
          by providing SDKs and user-friendly documentation were able to reach a
          wider developer audience for their APIs compared to API providers who
          weren't able to do so.
        </p>
        <p>
          It was so clear that even though writing SDKs and documentation was a
          difficult and expensive task, it followed repeatable patterns which
          could be defined as logic blocks in a code generation engine. So, as a
          research project, they started working on a code generation engine
          which dynamically generated SDKs using API description as input.
        </p>
        <p>
          After a rigorous journey, this research project was selected as a
          candidate for commercialization by Return on Science (a NZ national
          research commercialization program focused on bringing new academic
          research to market) and the concept was transformed into a product
          i.e. APIMatic.
        </p>
      </div>
      <div className="about-container-body">
        <h4>Flash Forward Today</h4>
        <p>
          APIMatic has come a long way since its inception 3 years ago. Having
          started with only generating SDKs, APIMatic now provides solutions in
          other areas of developer experience as well. Presently, APIMatic is
          used by numerous organizations around the world to:
        </p>
      </div>
      <div className="about-container-body-footer">
        <div className="about-container-body-left">
          <img  className="about-container-body-left-img"
            src={img}
            alt="img"
          />
        </div>
        <div className="about-container-body-right">
          <h2>Gowri shankar s</h2>
          <h4>frontend developer</h4>
          <div className="about-icons">
            <BsGoogle className="icon1"/>
            <BsInstagram className="icon2"/>
            <BsWhatsapp className="icon3"/>
          </div>
        </div>
        </div>
        <div className="about-footer-content">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </div>
  );
};

export default About;
