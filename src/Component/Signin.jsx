import React, { useContext } from "react";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Services/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import GoogleButton from "react-google-button";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const handlesubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();

    // logic
    try {
      const re = await signInWithEmailAndPassword(auth, email, password);
      console.log(re);
      const token = await re.user.getIdToken();
      handleLogin(token);
      toast.success("login successfully");
      navigate("/product");
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };

  const handleloginwithgoogle = async (e) => {
    e.preventDefault();
    // logic

    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      const token = await res.user.getIdToken(); // ✅ get Firebase token
      handleLogin(token);
      toast.success("login successfully");
      navigate("/product");
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };
  return (
    <div
      style={{
        height: "430px",
        width: "39%",
        background: "white",
        color: "black",
        marginLeft: "30%",
        marginTop: "4%",
        fontSize: "25px",
        border: "1px solid black",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "3%" }}>sign in page</h1>
      <br></br>
      <form onSubmit={handlesubmit} style={{ textAlign: "center" }}>
        email:
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={{ marginLeft: "8%" }}
        ></input>
        <br></br>
        password:
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          style={{ marginLeft: "1%" }}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              height: "50px",
              width: "43%",
              fontSize: "20px",
              borderRadius: "3px",

              outline: "none",
            }}
          >
            sign in
          </button>
          <GoogleButton
            onClick={handleloginwithgoogle}
            style={{ borderRadius: "3px" }}
            Login
            with
            google
          />
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Signin;
