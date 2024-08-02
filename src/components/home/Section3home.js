import React, { Fragment } from "react";
import "./css/section3home.css";
import img1 from "../../asset/clock.png";
import img2 from "../../asset/offer.png";
import img3 from "../../asset/shopping-cart.png";
import img4 from "../../asset/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png";
import img5 from "../../asset/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png";
import img6 from "../../asset/sadj-iron-pot-with-various-salads 1.png";
const Section3home = () => {
  return (
    <Fragment>
      <div className="sec3-home-container">
        <div className="sec3-home-section1">
          <img src={img4} alt="" className="img1" />
          <div className="home-section1-imges">
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="sec3-home-section2">
          <h2>
            Fastest Food <br /> Delivery in City
          </h2>
          <p>
            Our visual designer lets you quickly and of drag a down <br /> your
            way to customapps for both keep desktop.{" "}
          </p>

          <div className="sec3-data-2">
            <div className="sec3-data-imges">
              <img src={img1} alt="" />
            </div>
            <h4>Delivery within 30 minutes</h4>
          </div>
          <div className="sec3-data-2">
            <div className="sec3-data-imges">
              <img src={img2} alt="" />{" "}
            </div>
            <h4>Best Offer & Prices</h4>
          </div>
          <div className="sec3-data-2">
            <div className="sec3-data-imges">
              {" "}
              <img src={img3} alt="" />
            </div>{" "}
            <h4>Online Services Available</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section3home;
