import React from "react";
import { FaRegStar, FaRegBell, FaDollarSign } from "react-icons/fa";
import "../styles/Service.css";

const Service = ({ service }) => {
  const { name, img, pricing, reviewdetails } = service;
  return (
    <div className="col-m">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>
        <FaDollarSign /> <b>{pricing}</b>
      </p>
      <p>
        <FaRegBell /> {reviewdetails}
      </p>
    </div>
  );
};

export default Service;
