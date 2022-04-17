import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="col">
        <h3>
          Hy! Reviewing <br /> <span>Jhankars Course</span>
        </h3>
        <p>
          We are review web development course for you. We aks every people what
          they think how thare experience with <b>Jhankers</b> web development
          course
        </p>
        <a href="#">Explore More</a>
      </div>
      <div className="col">
        <img
          src="https://media.istockphoto.com/vectors/zip-line-vector-id165787303?k=20&m=165787303&s=170667a&w=0&h=CjJrvjgpHkyeI-V39tvgCM4v0Ahi2NXoa3d-X7nRLiM="
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
