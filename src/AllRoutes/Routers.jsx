import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Signin from "../Component/Signin";
import Signup from "../Component/Signup";
import Product from "../Product";
import Privatepage from "../Privatepage";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product"
          element={
            <Privatepage>
              <Product />
            </Privatepage>
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
