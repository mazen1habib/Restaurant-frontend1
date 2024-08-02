import React, { Fragment } from "react";
import "./css/section1about.css";
import img from "../../asset/about-section1.png";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
const Section1about = () => {
  return (
    <Fragment>
      <div className="section1-about-container">
        <div className="section1-about-sec1">
          {" "}
          <img src={img} alt="" />
          <div className="data-aboutus">
            <h3>Come and visit us</h3>
            <div className="data-section1">
              {" "}
              <BsTelephone color="white" /> <h5>(02)-011-5073-5939</h5>
            </div>
            <div className="data-section1">
              {" "}
              <CiMail size={20} color="white" />
              <h5>mazenhabeb1@gmail.com</h5>
            </div>
            <div className="data-section1">
              <FiMapPin style={{ color: "white" }} />
              <h5>
                {" "}
                837 W. Marshall Lane Marshalltown, <br /> IA 50158, Los Angeles
              </h5>
            </div>
          </div>
        </div>
        <div className="section1-about-sec2">
          <h1>
            We provide healthy <br />
            food for your family.
          </h1>
          <p>
            Our story began with a vision to create a unique dining <br />{" "}
            experience that merges fine dining, exceptional service, and a{" "}
            <br /> vibrant ambiance. Rooted in city's rich culinary culture, we
            aim to <br /> honor our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the <br /> overall experience. Our staff, renowned for their
            warmth and dedication, <br /> strives to make every visit an
            unforgettable event.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Section1about;
