import React, { useState } from "react";

const Hello = () => {
  const [checkoutState, setCheckoutState] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutState("Sucsess");
  };

  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> CheckOut </div>
      <form className="p-3 mt-3" onSubmit={handleCheckout}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="text" name="Address" id="pwd" placeholder="Address" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="number"
            name="Phone"
            id="pwd"
            placeholder="Phone Number"
          />
        </div>
        <h4>{checkoutState}</h4>
        <input type="submit" className="btn mt-3" value="Submit" />
      </form>
    </div>
  );
};

export default Hello;
