import React, { Fragment, useState } from "react";
import "./nav.css";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import img1 from "../../asset/twitter.png";
import img2 from "../../asset/facebook.png";
import img3 from "../../asset/linkedin.png";
import img4 from "../../asset/github.png";
import logo from "../../asset/Cuisine.png";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [x, setx] = useState("false");
  return (
    <Fragment>
      <header>
        <div className="nav-up">
          <div className="nav-up-sec1">
            <div className="nav-sec1-text">
              <BsTelephone color="white" /> <h3>(02)-011-5073-5939</h3>
            </div>
            <div className="nav-sec1-text">
              <CiMail size={20} color="white" />
              <h3>mazenhabeb1@gmail.com</h3>
            </div>
          </div>
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
      </header>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul>
          <NavLink to={"/"}>
            <li>Home </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/menu/All"}>
            <li>Menu</li>
          </NavLink>
          <NavLink to={"/Profile"}>
            <li>Profile</li>
          </NavLink>
        </ul>
        <ul
          className="bigmenu"
          style={x ? { display: "none" } : { display: "flex" }}
        >
          <NavLink to={"/"}>
            <li>Home </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/menu/All"}>
            <li>Menu</li>
          </NavLink>
          <NavLink to={"/Profile"}>
            <li>Profile</li>
          </NavLink>
        </ul>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {" "}
          <Link to={"/booking"}>
            {" "}
            <button class="boton-elegante">Book A Table</button>
          </Link>
          <Link to={"/login"}>
            <button class="Btn">
              <div class="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                </svg>
              </div>

              <div class="text">Login</div>
            </button>
          </Link>
          <div className="dogle">
            <input
              id="burger-checkbox"
              type="checkbox"
              onClick={() => setx(!x)}
            />
            <label class="burger" for="burger-checkbox">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
