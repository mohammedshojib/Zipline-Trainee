import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
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
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/signup"
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/login"
          >
            Login
          </NavLink>
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
