import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../booking/css/alltable.css";
import Navadmin from "./Navadmin";
// import Footer from "../footer/Footer";
import Table from "react-bootstrap/Table";
const Alltableuser = () => {
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/table`)
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <Navadmin />
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
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Alltableuser;
