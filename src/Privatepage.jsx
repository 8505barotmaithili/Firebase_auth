import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const Privatepage = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
};

export default Privatepage;
