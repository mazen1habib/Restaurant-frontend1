import React, { Fragment, useEffect, useState } from "react";
// import Section1menu from "../components/menu/Section1menu";
import "../components/menu/css/section1menu.css";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "./Loading";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
const Menu = () => {
  const [looding1, setlooding] = useState(false);
  useEffect(() => {
    setlooding(true);
    setTimeout(() => {
      setlooding(false);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {looding1 ? (
        <Loading />
      ) : (
        <Fragment>
          <Nav />
          <div className="menu-container">
            <h1>Our Menu</h1>
            <p>
              We consider all the drivers of change gives you the components{" "}
              <br />
              you need to change to create a truly happens.
            </p>
            <ul>
              <NavLink to={"/menu/All"}>
                <li>All </li>
              </NavLink>
              <NavLink to={"/menu/Breakfast"}>
                <li>Breakfast</li>
              </NavLink>
              <NavLink to={"/menu/Main Dishes"}>
                <li>Main Dishes</li>
              </NavLink>
              <NavLink to={"/menu/Drinks"}>
                <li>Drinks</li>
              </NavLink>
              <NavLink to={"/menu/Dessert"}>
                <li>Dessert</li>
              </NavLink>
            </ul>
            <Outlet />
          </div>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Menu;
