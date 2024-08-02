import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../../booking/css/alltable.css";
// import Footer from "../footer/Footer";
import Table from "react-bootstrap/Table";
import Navadmin from "../Navadmin";
import { Link, useNavigate } from "react-router-dom";
const Allproduct = () => {
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/products`)
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  const Navigate = useNavigate();
  let deleted = (id) => {
    console.log(id);
    axios
      .delete(`https://backend1-snowy-eight.vercel.app/api/products/${id}`)
      .then((resp) => {
        if (resp.data.status === "success") {
          console.log(resp);
          Navigate("/AcceptedProduct");
        }
      })
      .catch((er) => {
        console.log(er.response.data.error);
      });
  };
  return (
    <Fragment>
      <Navadmin />
      <div className="container">
        <Table responsive="xl" border={4} style={{ width: "1000px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>image mean</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {Allproduct.map((e, idx) => (
              <tr key={idx}>
                <td>{e.productName}</td>
                <td>{e.productPrice}</td>
                <td>{e.productDescription}</td>
                <td>{e.productCategory}</td>
                <td>
                  <img
                    src={e.imagemean}
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <button className="bu45" onClick={() => deleted(e._id)}>
                    <span class="box">Delete</span>
                  </button>
                </td>
                <td>
                  <Link to={`/Updateproduct/${e._id}`}>
                    {" "}
                    <button className="bu45">
                      <span class="box">Update</span>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Allproduct;
