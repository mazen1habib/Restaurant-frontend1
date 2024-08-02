import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import style from "./css/booking.module.css";
import Loading from "./Loading";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
const Bookatable = () => {
  let times = [
    "5:00PM",
    "6:00PM",
    "7:00PM",
    "8:00PM",
    "9:00PM",
    "10:00PM",
    "11:00PM",
  ];
  const [looding1, setlooding] = useState(false);
  useEffect(() => {
    setlooding(true);
    setTimeout(() => {
      setlooding(false);
    }, 3000);
  }, []);
  const [userData, setuserData] = useState({
    nameofuser: "",
    mealTime: "",
    mealDate: "",
    phone: "",
    paymentType: "",
    totalPerson: "",
  });
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    setErrors([]);
    let c = localStorage.getItem("token1");
    axios
      .post(
        `https://backend1-snowy-eight.vercel.app/api/placetable/${c}`,
        userData
      )
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.status === "success") {
          setErrors([]);
          Navigate("/accepted");
        }
      })
      .catch((er) => {
        // console.log(er.response?.data.data);
        setErrors(er.response?.data.data);
      });
  };
  return (
    <Fragment>
      {looding1 ? (
        <Loading />
      ) : (
        <Fragment>
          <Nav />
          <div className={style.container}>
            <h1 className={style.h12}>Book A Table</h1>
            <p className={style.p12}>
              We consider all the drivers of change gives you the components{" "}
              <br />
              you need to change to create a truly happens.
            </p>
            <form className={style.form} onSubmit={(e) => e.preventDefault()}>
              {Errors?.length > 0 ? (
                Errors?.map(
                  (e) =>
                    e !== "jwt must be provided" && (
                      <p style={{ color: "red", fontSize: "12px" }}>{e}</p>
                    )
                )
              ) : (
                <p> welcome</p>
              )}
              <div
                className={style.flex}
                style={{ display: "flex", gap: "20px" }}
              >
                <label className={style.label} style={{ width: "200px" }}>
                  <input
                    className={style.input1}
                    type="date"
                    placeholder=""
                    required=""
                    onChange={(e) =>
                      setuserData({ ...userData, mealDate: e.target.value })
                    }
                  />
                  <span className={style.span}>Date</span>
                </label>
                <label className={style.label} style={{ width: "200px" }}>
                  <select
                    className={style.input}
                    onChange={(e) =>
                      setuserData({ ...userData, mealTime: e.target.value })
                    }
                  >
                    <span>Time</span>
                    <option Value={"select"}> Select an option </option>
                    {times.map((e) => (
                      <>
                        <option value={e} key={e._id}>
                          {" "}
                          {e}
                        </option>
                      </>
                    ))}
                  </select>
                  <span className={style.span}>Time</span>
                </label>
              </div>
              <div className={style.flex}>
                <label className={style.label}>
                  <input
                    className={style.input1}
                    type="text"
                    placeholder=""
                    required=""
                    onChange={(e) =>
                      setuserData({ ...userData, nameofuser: e.target.value })
                    }
                  />
                  <span className={style.span}>Name</span>
                </label>
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
                  <span className={style.span}>phone</span>
                </label>
              </div>
              <label className={style.label}>
                <input
                  className={style.input}
                  type="text"
                  placeholder=""
                  required=""
                  onChange={(e) =>
                    setuserData({ ...userData, totalPerson: e.target.value })
                  }
                />
                <span className={style.span}>Total Person</span>
              </label>

              <button className={style.submit} onClick={sumbitData}>
                Book A Table
              </button>
              {Errors.map(
                (e) =>
                  e === "jwt must be provided" && (
                    <h3>
                      {" "}
                      Purchase could not be completed , please{" "}
                      <Link to={"/login"}>log in </Link>{" "}
                    </h3>
                  )
              )}
            </form>
          </div>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Bookatable;
