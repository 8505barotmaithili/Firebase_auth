import React from "react";
import { useState } from "react";
import { auth } from "../Services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    console.log(name, email, password);
    e.preventDefault();
    // logic

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      toast.error("failed");
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
      <h1 style={{ textAlign: "center", paddingTop: "3%" }}>Sign up page</h1>
      <form onSubmit={handlesubmit} style={{ textAlign: "center" }}>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          style={{ marginLeft: "8%" }}
        ></input>
        <br></br>
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
          style={{ marginLeft: "2%" }}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <button
          style={{
            height: "50px",
            width: "43%",
            fontSize: "20px",
            borderRadius: "3px",

            outline: "none",
          }}
        >
          signup
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Signup;
