import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";

const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const creatUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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
      <div className="text-center mt-4 name"> Signup </div>
      <form className="p-3 mt-3" onSubmit={creatUser}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <input type="submit" className="btn mt-3" value="Signup" />
        {/* <p>{error?.message}</p> */}
      </form>

      <div className="text-center fs-6">
        <Link to="#">Forget password?</Link> or <span> </span>
        <Link to="/login">Login</Link>
        <button className="btn mt-3" onClick={handleSignin}>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
