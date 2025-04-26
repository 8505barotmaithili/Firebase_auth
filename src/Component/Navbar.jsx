import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { token, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/signin");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          height: "40px",
          lineHeight: "40px",
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "white" }}
          >
            product
          </Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link
                to="/signin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Signin
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{ color: "white", textDecoration: "none" }}
              >
                Signup
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={logout}
              style={{
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
