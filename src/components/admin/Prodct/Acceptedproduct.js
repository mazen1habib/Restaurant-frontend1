import React, { Fragment } from "react";
import img1 from "../../../asset/check.png";
import "../../booking/css/accepted.css";
import { Link } from "react-router-dom";
import Navadmin from "../Navadmin";
const Acceptedproduct = () => {
  return (
    <Fragment>
      <Navadmin />
      <div className="container-accepted">
        <img src={img1} alt="" />
        <h1>The Product is added tp the database!</h1>

        <Link to={"/AddProduct"}>
          <div class="button-borders">
            <button class="primary-button"> Back</button>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Acceptedproduct;
