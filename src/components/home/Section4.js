import React, { Fragment } from "react";
import "./css/section4.css";
import img1 from "../../asset/Ellipse 19.png";
import img2 from "../../asset/Image.png";
import img3 from "../../asset/Image (1).png";
const Section4 = () => {
  return (
    <Fragment>
      <div className="section4-container">
        <h1>What Our Customers Say</h1>
        <div className="data-section4-container">
          <div className="data-section4">
            <h4>“The best restaurant”</h4>
            <p>
              Last night, we dined at place and were <br /> simply blown away.
              From the moment we <br /> stepped in, we were enveloped in an{" "}
              <br /> inviting atmosphere and greeted with <br /> warm smiles.
            </p>
            <hr />
            <div className="user-data-section4">
              <img src={img1} alt="" />
              <div>
                <h5>Sophire Robson</h5>
                <p>Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className="data-section4">
            <h4>“Simply delicious”</h4>
            <p>
              Place exceeded my expectations on all <br />
              fronts. The ambiance was cozy and <br /> relaxed, making it a
              perfect venue for our <br /> anniversary dinner. Each dish was{" "}
              <br />
              prepared and beautifully presented.
            </p>
            <hr />
            <div className="user-data-section4">
              <img src={img2} alt="" />
              <div>
                <h5>Matt Cannon</h5>
                <p>San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="data-section4">
            <h4>“One of a kind restaurant”</h4>
            <p>
              The culinary experience at place is first <br />
              to none. The atmosphere is vibrant, the <br /> food - nothing
              short of extraordinary. The <br /> food was the highlight of our
              evening <br />. Highly recommended.
            </p>
            <hr />
            <div className="user-data-section4">
              <img src={img3} alt="" />
              <div>
                <h5>Andy Smith</h5>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section4;
