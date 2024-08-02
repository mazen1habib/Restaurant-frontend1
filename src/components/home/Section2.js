import React, { Fragment } from "react";
import img1 from "../../asset/tea 1.png";
import img3 from "../../asset/Vector (1).png";
import img2 from "../../asset/Vector.png";
import img4 from "../../asset/Group.png";
import { Link } from "react-router-dom";
import "./css/section2home.css";
const Section2 = () => {
  return (
    <Fragment>
      <div className="sec2-home-container">
        <h1>Browse Our Menu</h1>
        <div className="sec2-data-container">
          <div className="sec2-data ">
            <div className="img-sec2">
              <img src={img1} alt="" />
            </div>
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we <br />
              look in the future with certainty <br />
              and pride for our life.
            </p>
            <Link>
              {" "}
              <h4>Explore Menu</h4>
            </Link>
          </div>
          <div className="sec2-data ">
            <div className="img-sec2">
              <img src={img2} alt="" />
            </div>
            <h3>Main Dishes</h3>
            <p>
              In the new era of technology we <br />
              look in the future with certainty <br />
              and pride for our life.
            </p>
            <Link>
              {" "}
              <h4>Explore Menu</h4>
            </Link>
          </div>
          <div className="sec2-data ">
            <div className="img-sec2">
              <img src={img3} alt="" />
            </div>
            <h3>Drinks</h3>
            <p>
              In the new era of technology we <br />
              look in the future with certainty <br />
              and pride for our life.
            </p>
            <Link>
              {" "}
              <h4>Explore Menu</h4>
            </Link>
          </div>
          <div className="sec2-data ">
            <div className="img-sec2">
              <img src={img4} alt="" />
            </div>
            <h3>Desserts</h3>
            <p>
              In the new era of technology we <br />
              look in the future with certainty <br />
              and pride for our life.
            </p>
            <Link>
              {" "}
              <h4>Explore Menu</h4>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section2;
