import React, { Fragment } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import img1 from "../../asset/check.png";
import "./css/accepted.css";
import { Link } from "react-router-dom";
const Accepted = () => {
  return (
    <Fragment>
      <Nav />
      <div className="container-accepted">
        <img src={img1} alt="" />
        <h1>Your Booking a Table Is Completed!</h1>
        <h3>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. <br /> You will receive an email
          confirmation when your order is completed.
        </h3>
        <Link to={"/Alltable"}>
          <div class="button-borders">
            <button class="primary-button"> Previous Operations</button>
          </div>
        </Link>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Accepted;
