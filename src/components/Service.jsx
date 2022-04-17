import React from "react";
import { FaRegStar, FaRegBell, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Service.css";

const Service = ({ service }) => {
  const { name, img, pricing, reviewdetails } = service;
  const navigate = useNavigate();
  return (
    <div className="col-m">
      <img src={img ? img : "image not found"} alt="" />
      <h4>{name}</h4>
      <p>
        <FaDollarSign /> <b>{pricing}</b>
      </p>
      <p>
        <FaRegBell /> {reviewdetails}
      </p>
      <div className="text-center">
        <button
          onClick={() => navigate("/checkout")}
          className="btn btn-success px-5 mt-3"
        >
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Service;
