import axios from "axios";
import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../../../routes/css/register.module.css";
import Nav from "../Navadmin";
// import Footer from "../../footer/Footer";
const Registeradmin = () => {
  const [userData, setuserData] = useState({
    adminName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    setErrors([]);
    axios
      .post(
        `https://backend1-snowy-eight.vercel.app/api/admin/Register`,
        userData
      )
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.status === "success") {
          console.log(resp);
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
          <p className={style.title}>Register </p>
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
              type="text"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, adminName: e.target.value })
              }
            />
            <span className={style.span}>Full Name</span>
          </label>
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
          <div className={style.flex}>
            <label className={style.label}>
              <input
                className={style.input1}
                type="text"
                placeholder=""
                required=""
                onChange={(e) =>
                  setuserData({ ...userData, phone: e.target.value })
                }
              />
              <span className={style.span}>Phone</span>
            </label>
          </div>
          <label className={style.label}>
            <input
              className={style.input}
              type="text"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, address: e.target.value })
              }
            />
            <span className={style.span}>Address</span>
          </label>

          <button className={style.submit} onClick={sumbitData}>
            Submit
          </button>
          <p className={style.signin}>
            Already have an acount ?{" "}
            <NavLink to={`/login-admin`}>Signin</NavLink>{" "}
          </p>
        </form>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Registeradmin;
