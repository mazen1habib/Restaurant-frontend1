import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./css/alltable.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Table from "react-bootstrap/Table";
const Alltable = () => {
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    let c = localStorage.getItem("token1");
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/allTable/${c}`)
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <Nav />
      <div className="container">
        <Table
          responsive="xl"
          border={4}
          style={{ width: "1000px", minHeight: "100vh" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Day</th>
              <th>Phone</th>
              <th>Total Person</th>
              <th>Payment Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Allproduct.map((e) => (
              <tr>
                <td>{e.nameofuser}</td>
                <td>{e.mealTime}</td>
                <td>{e.mealDate}</td>
                <td>{e.phone}</td>
                <td>{e.totalPerson}</td>
                <td>{e.paymentType}</td>
                <td>{e.isDone === "false" ? "accepted" : "rejected"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Alltable;
