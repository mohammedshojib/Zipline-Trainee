import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.init";

const Header = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => unsubscribe;
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="h-link">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/"
          >
            Home
          </NavLink>{" "}
          {currentUser?.email ? (
            <span>{currentUser?.displayName || "Name Not Found"}</span>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/signUp"
            >
              SignUp
            </NavLink>
          )}
          {currentUser?.email ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/myaccount"
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/login"
            >
              Login
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/q&a"
          >
            Q & A
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
