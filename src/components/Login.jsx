import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.init";

const provider = new GoogleAuthProvider();

// const { error, setError } = useState("");

const Login = () => {
  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> Login </div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <input type="submit" className="btn mt-3" value="Login" />
        {/* <p>{error?.message}</p> */}
      </form>

      <div className="text-center fs-6">
        <Link to="#">Forget password?</Link> or <span> </span>
        <Link to="/signup">Sign up</Link>
        <button className="btn mt-3" onClick={handleSignin}>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
