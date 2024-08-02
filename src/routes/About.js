import React, { Fragment, useEffect, useState } from "react";
import Section1about from "../components/about/Section1about";
import Section4 from "../components/home/Section4";
import Loading from "./Loading";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
const About = () => {
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
          <Section1about />
          <Section4 />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default About;
