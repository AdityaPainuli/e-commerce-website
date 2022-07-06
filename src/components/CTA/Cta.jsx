import React from "react";
import "./cta.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { TiTickOutline } from "react-icons/ti";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__section">
        <div className="cta__img-section">
          <img
            className="cta-image"
            src={
              "https://images.unsplash.com/photo-1630329273801-8f629dba0a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            alt="CTA_IMAGE"
          />
          <div className="cta__img-content">
            <p>Colours of Summers</p>
            <button className="btn-dark">Shop</button>
          </div>
        </div>
        <div className="cta__img-section">
          <img
            className="cta-image"
            src={
              "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            alt="CTA_IMAGE"
          />
          <div className="cta__img-content">
            <p>For the creative in you</p>
            <button className="btn-dark">Shop</button>
          </div>
        </div>
      </div>
      <div className="cta__benifits">
        <div className="cta__benifits__box">
          <TbTruckDelivery className="cta-icons" />
          <h6>Free Shipping</h6>
          <p className="lead">
            Get free shipping on your orders all over India.
          </p>
        </div>
        <div className="cta__benifits__box">
          <BiWorld className="cta-icons" />
          <h6>Free Shipping</h6>
          <p className="lead">
            Get free shipping on your orders all over India.
          </p>
        </div>
        <div className="cta__benifits__box">
          <TiTickOutline className="cta-icons" />
          <h6>Free Shipping</h6>
          <p className="lead">
            Get free shipping on your orders all over India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
