import axios from "axios";
import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./css/register.module.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
const Login = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  // const [Date, setData] = useState({
  //   emailAdmin: "",
  //   passwordAdmin: "",
  // });
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    setErrors([]);
    axios
      .post(`https://backend1-snowy-eight.vercel.app/api/user/login`, userData)
      .then((resp) => {
        console.log(resp.data.data);
        if (resp?.data?.status === "success") {
          setErrors([]);
          localStorage.setItem("token1", resp.data.data.token);
          Navigate("/profile");
        }
      })
      .catch((er) => {
        console.log(er.response);
        setErrors(er.response?.data?.data);
      });
    axios
      .post(`https://backend1-snowy-eight.vercel.app/api/admin/login`, userData)
      .then((resp) => {
        if (resp?.data?.status === "success") {
          setErrors([]);
          Navigate("/AddProduct");
        }
      })
      .catch((er) => {
        console.log(er.response);
        setErrors(er.response?.data?.data);
      });
  };
  return (
    <Fragment>
      <Nav />
      <div className={style.container}>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <p className={style.title}>Sign In </p>
          {Errors?.length > 0 ? (
            Errors?.map((e, idx) => (
              <>
                {" "}
                <p key={idx} className={style.po}>
                  {" "}
                  {e}{" "}
                </p>
              </>
            ))
          ) : (
            <p> welcome</p>
          )}
          <label className={style.label}>
            <input
              className={style.input}
              type="email"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />
            <span className={style.span}>Email</span>
          </label>

          <label className={style.label}>
            <input
              className={style.input}
              type="password"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, password: e.target.value })
              }
            />
            <span className={style.span}>Password</span>
          </label>
          <button className={style.submit} onClick={sumbitData}>
            Submit
          </button>
          <p className={style.signin}>
            You do not have an acount ?{" "}
            <NavLink to={`/register`}>User Register</NavLink>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
