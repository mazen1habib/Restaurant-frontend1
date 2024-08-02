import React, { Fragment, useEffect, useState } from "react";
import Section1home from "../components/home/Section1home";
import Section2 from "../components/home/Section2";
import Section3home from "../components/home/Section3home";
import Section4 from "../components/home/Section4";
import Loading from "./Loading";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
const Home = () => {
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
          <Section1home />
          <Section2 />
          <Section3home />
          <Section4 />
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
