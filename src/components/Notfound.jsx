import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/images.jpg";
import "../styles/notFound.css";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h4>404 Not Found</h4>
      <img src={notFound} alt="not-found" />
      <br />
      <a className="btn-primary" onClick={() => navigate("/")}>
        Go Back To Home
      </a>
    </div>
  );
};

export default Notfound;
