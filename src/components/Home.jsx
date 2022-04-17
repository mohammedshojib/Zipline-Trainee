import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Service from "./Service.jsx";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Hero2 from "./Hero2";

const Home = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Hero />
      <div className="main-container" onClick={() => navigate("/checkout")}>
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
      <Hero2 />
    </div>
  );
};

export default Home;
