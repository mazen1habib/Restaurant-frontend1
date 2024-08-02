import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../booking/css/alltable.css";
import Navadmin from "./Navadmin";
// import Footer from "../footer/Footer";
import Table from "react-bootstrap/Table";

const Alluser = () => {
  const [Allusers, setAllusers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/alluser`)
      .then((res) => {
        setAllusers(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <Navadmin />
      <div className="container">
        <Table responsive="xl" border={4} style={{ width: "1000px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Orders</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {Allusers.map((e) => (
              <tr>
                <td>{e.userName}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td>{e.numberOfOrders}</td>
                <td>{e.creditCard}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Alluser;
