import React, { Fragment, useEffect, useState } from "react";
import "./css/auth.css";
import axios from "axios";
import img1 from "../asset/man.png";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
const Profile = () => {
  const [profile, setprofile] = useState({});
  useEffect(() => {
    let c = localStorage.getItem("token1");
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/user/profile/${c}`)
      .then((res) => {
        setprofile(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <Nav />
      <div className="container-auth">
        <div className="card">
          <div className="card__img">
            <svg style={{ width: "100%" }} xmlns="http://www.w3.org/2000/svg">
              <rect
                style={{ width: "540", height: "450" }}
                fill="#ffffff"
              ></rect>
              <defs>
                <linearGradient
                  gradientTransform="rotate(222,648,379)"
                  y2="100%"
                  y1="0"
                  x2="0"
                  x1="0"
                  gradientUnits="userSpaceOnUse"
                  id="a"
                >
                  <stop stop-color="#ffffff" offset="0"></stop>
                  <stop stop-color="#FC726E" offset="1"></stop>
                </linearGradient>
                <pattern
                  viewBox="0 0 1080 900"
                  y="0"
                  x="0"
                  height="250"
                  width="300"
                  id="b"
                  patternUnits="userSpaceOnUse"
                >
                  <g fill-opacity="0.5">
                    <polygon
                      points="90 150 0 300 180 300"
                      fill="#444"
                    ></polygon>
                    <polygon points="90 150 180 0 0 0"></polygon>
                    <polygon points="270 150 360 0 180 0" fill="#AAA"></polygon>
                    <polygon
                      points="450 150 360 300 540 300"
                      fill="#DDD"
                    ></polygon>
                    <polygon points="450 150 540 0 360 0" fill="#999"></polygon>
                    <polygon points="630 150 540 300 720 300"></polygon>
                    <polygon points="630 150 720 0 540 0" fill="#DDD"></polygon>
                    <polygon
                      points="810 150 720 300 900 300"
                      fill="#444"
                    ></polygon>
                    <polygon points="810 150 900 0 720 0" fill="#FFF"></polygon>
                    <polygon
                      points="990 150 900 300 1080 300"
                      fill="#DDD"
                    ></polygon>
                    <polygon
                      points="990 150 1080 0 900 0"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="90 450 0 600 180 600"
                      fill="#DDD"
                    ></polygon>
                    <polygon points="90 450 180 300 0 300"></polygon>
                    <polygon
                      points="270 450 180 600 360 600"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="270 450 360 300 180 300"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="450 450 360 600 540 600"
                      fill="#DDD"
                    ></polygon>
                    <polygon
                      points="450 450 540 300 360 300"
                      fill="#999"
                    ></polygon>
                    <polygon
                      points="630 450 540 600 720 600"
                      fill="#999"
                    ></polygon>
                    <polygon
                      points="630 450 720 300 540 300"
                      fill="#FFF"
                    ></polygon>
                    <polygon points="810 450 720 600 900 600"></polygon>
                    <polygon
                      points="810 450 900 300 720 300"
                      fill="#DDD"
                    ></polygon>
                    <polygon
                      points="990 450 900 600 1080 600"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="990 450 1080 300 900 300"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="90 750 0 900 180 900"
                      fill="#222"
                    ></polygon>
                    <polygon points="270 750 180 900 360 900"></polygon>
                    <polygon
                      points="270 750 360 600 180 600"
                      fill="#DDD"
                    ></polygon>
                    <polygon points="450 750 540 600 360 600"></polygon>
                    <polygon points="630 750 540 900 720 900"></polygon>
                    <polygon
                      points="630 750 720 600 540 600"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="810 750 720 900 900 900"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="810 750 900 600 720 600"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="990 750 900 900 1080 900"
                      fill="#999"
                    ></polygon>
                    <polygon
                      points="180 0 90 150 270 150"
                      fill="#999"
                    ></polygon>
                    <polygon
                      points="360 0 270 150 450 150"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="540 0 450 150 630 150"
                      fill="#FFF"
                    ></polygon>
                    <polygon points="900 0 810 150 990 150"></polygon>
                    <polygon
                      points="0 300 -90 450 90 450"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="0 300 90 150 -90 150"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="180 300 90 450 270 450"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="180 300 270 150 90 150"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="360 300 270 450 450 450"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="360 300 450 150 270 150"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="540 300 450 450 630 450"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="540 300 630 150 450 150"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="720 300 630 450 810 450"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="720 300 810 150 630 150"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="900 300 810 450 990 450"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="900 300 990 150 810 150"
                      fill="#999"
                    ></polygon>
                    <polygon points="0 600 -90 750 90 750"></polygon>
                    <polygon
                      points="0 600 90 450 -90 450"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="180 600 90 750 270 750"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="180 600 270 450 90 450"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="360 600 270 750 450 750"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="360 600 450 450 270 450"
                      fill="#999"
                    ></polygon>
                    <polygon
                      points="540 600 630 450 450 450"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="720 600 630 750 810 750"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="900 600 810 750 990 750"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="900 600 990 450 810 450"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="0 900 90 750 -90 750"
                      fill="#DDD"
                    ></polygon>
                    <polygon
                      points="180 900 270 750 90 750"
                      fill="#444"
                    ></polygon>
                    <polygon
                      points="360 900 450 750 270 750"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="540 900 630 750 450 750"
                      fill="#AAA"
                    ></polygon>
                    <polygon
                      points="720 900 810 750 630 750"
                      fill="#FFF"
                    ></polygon>
                    <polygon
                      points="900 900 990 750 810 750"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="1080 300 990 450 1170 450"
                      fill="#222"
                    ></polygon>
                    <polygon
                      points="1080 300 1170 150 990 150"
                      fill="#FFF"
                    ></polygon>
                    <polygon points="1080 600 990 750 1170 750"></polygon>
                    <polygon
                      points="1080 600 1170 450 990 450"
                      fill="#666"
                    ></polygon>
                    <polygon
                      points="1080 900 1170 750 990 750"
                      fill="#DDD"
                    ></polygon>
                  </g>
                </pattern>
              </defs>
              <rect
                height="100%"
                width="100%"
                fill="url(#a)"
                y="0"
                x="0"
              ></rect>
              <rect
                height="100%"
                width="100%"
                fill="url(#b)"
                y="0"
                x="0"
              ></rect>
            </svg>
          </div>
          <div class="card__avatar">
            <img
              src={img1}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div class="card__title">{profile.userName}</div>
          <div class="card__subtitle"> Email: {profile.email}</div>
          <div class="card__subtitle"> Phone: (+02) {profile.phone}</div>
          {/* <div class="card__subtitle"> Address: {profile.address}</div> */}
          <Link to={`/Update-user/${profile._id}`}>
            {" "}
            <button className="bu45" style={{ color: "  #859ba8" }}>
              <span class="box">Update</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
