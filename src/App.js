import { Fragment } from "react";
import "./App.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Section1menu from "./components/menu/Section1menu";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Bookatable from "./routes/Bookatable";
import Accepted from "./components/booking/Accepted";
import Alltable from "./components/booking/Alltable";
import AddProduct from "./components/admin/Prodct/AddProduct";
import Acceptedproduct from "./components/admin/Prodct/Acceptedproduct";
import Allproduct from "./components/admin/Prodct/Allproduct";
import Updateproduct from "./components/admin/Prodct/Updateproduct";
import Alltableuser from "./components/admin/Alltableuser";
import Alluser from "./components/admin/Alluser";
import Registeradmin from "./components/admin/authadmin/Registeradmin";
import Updateuser from "./routes/Updateuser";
// import Loginadmin from "./components/admin/Loginadmin";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/menu"} element={<Menu />}>
          <Route path={"/menu/:id"} element={<Section1menu />} />
        </Route>
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/accepted"} element={<Accepted />} />
        <Route path={"/Profile"} element={<Profile />} />
        <Route path={"/booking"} element={<Bookatable />} />
        <Route path={"/Update-user/:id"} element={<Updateuser />} />
        <Route path={"/Alltable"} element={<Alltable />} />
        <Route path={"/AddProduct"} element={<AddProduct />} />
        <Route path={"/Allproduct"} element={<Allproduct />} />
        <Route path={"/Updateproduct/:id"} element={<Updateproduct />} />
        <Route path={"/AcceptedProduct"} element={<Acceptedproduct />} />
        <Route path={"/Alltableuser"} element={<Alltableuser />} />
        <Route path={"/Alluser"} element={<Alluser />} />
        <Route path={"/Register-admin"} element={<Registeradmin />} />
        {/* <Route path={"/login-admin"} element={<Loginadmin />} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
