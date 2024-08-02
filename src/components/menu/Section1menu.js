import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
const Section1menu = () => {
  const params = useParams((e) => e);
  let p = params.id;
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend1-snowy-eight.vercel.app/api/products`)
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <div className="section1menu-container">
        {Allproduct.map((e) => (
          <>
            {e.productCategory === p ? (
              <div className="data-menu">
                <img src={e.imagemean} alt="" />
                <h2>$ {e.productPrice}</h2>
                <h3>{e.productName}</h3>
                <p>{e.productDescription}</p>
              </div>
            ) : (
              p === "All" && (
                <div className="data-menu">
                  <img src={e.imagemean} alt="" />
                  <h2>$ {e.productPrice}</h2>
                  <h3>{e.productName}</h3>
                  <p>{e.productDescription}</p>
                </div>
              )
            )}
          </>
        ))}
      </div>
    </Fragment>
  );
};

export default Section1menu;
