import axios from "axios";
import React, { Fragment, useState } from "react";
import style from "../../../routes/css/register.module.css";
import Navadmin from "../Navadmin";
import Footer from "../../footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
const Updateproduct = () => {
  const [userData, setuserData] = useState({});
  const params = useParams((e) => e);
  const [images, setimage] = useState();
  const [meanimage, setmeanimage] = useState();
  let category = ["Breakfast", "Main Dishes", "Drinks", "Dessert"];
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    const formData = new FormData();
    formData.append("imagemean", meanimage);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    for (let key in userData) {
      formData.append(key, userData[key]);
    }
    axios
      .patch(
        `https://backend1-snowy-eight.vercel.app/api/products/${params.id}`,
        formData
      )
      .then((resp) => {
        if (resp?.data) {
          console.log(resp);
          setErrors([]);
          Navigate(`/Allproduct`);
        }
      })
      .catch((er) => {
        console.log(er.response.data.data);
        // setErrors(er.response?.data?.data);
      });
  };
  return (
    <Fragment>
      <Navadmin />
      <div className={style.container}>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <p className={style.title}>Update Product</p>
          {Errors?.length > 0 ? (
            Errors === 1 ? (
              <p>{Errors}</p>
            ) : (
              Errors?.map((e, idx) => (
                <>
                  {" "}
                  <p key={idx} className={style.po}>
                    {" "}
                    {e}{" "}
                  </p>
                </>
              ))
            )
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
                setuserData({ ...userData, productName: e.target.value })
              }
            />
            <span className={style.span}>Name</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              type="number"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, productPrice: e.target.value })
              }
            />
            <span className={style.span}>Price</span>
          </label>

          <label className={style.label}>
            <input
              className={style.input}
              type="text"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, productDescription: e.target.value })
              }
            />
            <span className={style.span}>Description</span>
          </label>

          <div className={style.flex}>
            <label className={style.label} style={{ width: "200px" }}>
              <select
                className={style.input}
                onChange={(e) =>
                  setuserData({ ...userData, productCategory: e.target.value })
                }
              >
                <span>Time</span>
                <option Value={"select"}> Select an option </option>
                {category.map((e) => (
                  <>
                    <option value={e} key={e._id}>
                      {" "}
                      {e}
                    </option>
                  </>
                ))}
              </select>
              <span className={style.span}>Category</span>
            </label>
          </div>
          <label className={style.label}>
            <input
              type="file"
              className={style.input}
              onChange={(e) => setmeanimage(e.target.files[0])}
            />
            <span className={style.span}>Image Mean</span>
          </label>
          <label className={style.label}>
            <input
              type="file"
              multiple
              className={style.input}
              onChange={(e) => setimage(e.target.files)}
            />
            <span className={style.span}>Images</span>
          </label>

          <button className={style.submit} onClick={sumbitData}>
            Submit
          </button>
          {/* <p className={style.signin}>
              Already have an acount ? <NavLink to={`/login`}>Signin</NavLink>{" "}
            </p> */}
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Updateproduct;
