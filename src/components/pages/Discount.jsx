import React from "react";
import "../../index.css";
import discount from "../../assets/discount.png";

function Discount() {
  return (
    <div className="discount-wrapper">
      <div className="discount-container">
        <img src={discount} alt="discount banner" className="discount-image" />
        <div className="discount-text">
          <h1>10% Discount</h1>
          <h4>On Beauty Treatments</h4>
          <h4>when having hair colour</h4>
          <br />
          <h4>Patch testing required</h4>
          <h4>48 hours prior to hair/lash</h4>
          <h4>brow tinting & lash services</h4>
        </div>
      </div>
    </div>
  );
}

export default Discount;
