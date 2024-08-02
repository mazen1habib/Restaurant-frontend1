import React, { Fragment } from "react";
import "./css/section1home.css";
import { Link } from "react-router-dom";
const Section1home = () => {
  return (
    <Fragment>
      <div className="sec1-home-container">
        <h1>
          Best food for <br /> your taste{" "}
        </h1>
        <p>
          Discover delectable cuisine and unforgettable moments <br /> in our
          welcoming, culinary haven.{" "}
        </p>
        <div className="but1">
          {" "}
          <Link to={"/booking"}>
            <button class="boton-elegante">Book A Table</button>
          </Link>
          <Link to={"/menu"} style={{ borderColor: "white" }}>
            <button class=" bu">Explore Menu</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Section1home;
