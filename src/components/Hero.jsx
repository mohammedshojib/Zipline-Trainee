import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="col">
        <h3>
          Wellcome to <br /> <span>Zipline Trainee</span>
        </h3>
        <p>
          A freelance Zipline trainer with 4 years of exp. i teach more then 100
          of people how to use zipline <b>100%</b> with safety. Lets start with
          you
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
