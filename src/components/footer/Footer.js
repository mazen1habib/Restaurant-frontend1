import React, { Fragment } from "react";
import "./footer.css";
import logofooter from "../../asset/Original Logo.png";
import img1 from "../../asset/twitter.png";
import img2 from "../../asset/facebook.png";
import img3 from "../../asset/linkedin.png";
import img4 from "../../asset/github.png";
import img5 from "../../asset/Mask group (2).png";
import img6 from "../../asset/pexels-ella-olsson-1640772 1.png";
import img7 from "../../asset/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png";
import img8 from "../../asset/pexels-ash-376464 1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <div className="continer-footer">
        <footer>
          <div className="section1-footer-container">
            <img src={logofooter} alt="" className="logofooter" />
            <p>
              In the new era of technology we look a <br /> in the future with
              certainty and pride to <br /> for our company and.
            </p>
            <div className="nav-up-sec2">
              <Link>
                <div className="nav-sec2-icons">
                  <img src={img1} alt="" />
                </div>
              </Link>
              <Link to={"https://www.facebook.com/mazen.7abeb"}>
                <div className="nav-sec2-icons">
                  <img src={img2} alt="" />
                </div>
              </Link>
              <Link to={"https://www.linkedin.com/in/mazen-habeb-a88a28256/"}>
                <div className="nav-sec2-icons">
                  <img src={img3} alt="" />
                </div>
              </Link>
              <Link to={"https://github.com/mazen1habib"}>
                <div className="nav-sec2-icons">
                  <img src={img4} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="section2-footer-container">
            <ul>
              <h2>Pages</h2>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>About</li>
              </Link>
              <Link>
                <li>Menu</li>
              </Link>
              <Link>
                <li>Pricing</li>
              </Link>
              <Link>
                <li>Blog</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
              <Link>
                <li>Delivery</li>
              </Link>
            </ul>
            <ul>
              <h2>Utility Pages</h2>
              <Link>
                <li>Start Here</li>
              </Link>
              <Link>
                <li>Styleguide</li>
              </Link>
              <Link>
                <li>assword Protected</li>
              </Link>
              <Link>
                <li>404 Not Found</li>
              </Link>
              <Link>
                <li>Licenses</li>
              </Link>
              <Link>
                <li>Changelog</li>
              </Link>
              <Link>
                <li>View More</li>
              </Link>
            </ul>
          </div>
          <div className="section3-footer-container">
            <h3>Follow Us On Instagram</h3>
            <div className="continer-imges">
              <div className="imges">
                <img src={img5} alt="" /> <img src={img6} alt="" />
              </div>
              <div className="images">
                <img src={img7} alt="" />
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
        </footer>
        <div className="down-footer">
          <h3>Copyright © 2024 Mazen Habeb. All Rights Reserved</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
