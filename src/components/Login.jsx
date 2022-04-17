import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, loading, errorHook] = useAuthState(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        <Navigate to="/" />;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
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

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="wrapper">
        <div className="text-center mt-4 name"> Login </div>
        <p className="text-danger text-center">{error}</p>
        <form className="p-3 mt-3" onSubmit={handleLogin}>
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
  }
};

export default Login;
