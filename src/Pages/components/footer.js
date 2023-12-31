import React from "react";
import HomeSvg from "./icons/homeSvg";
import CartSvg from "./icons/cartSvg";
import UserSvg from "./icons/userSvg";
import ChartSvg from "./icons/chartSvg";
import HeartSvg from "./icons/heartSvg";
import { Link } from "react-router-dom";
function footer(props) {
  return (
    <div className="footer footer-app">
      <div className="container">
        <div className="footer-navbar">
          <span className="text-orange">
            <Link to={"/"}>
              <HomeSvg />
            </Link>
          </span>
          <HeartSvg />
          <span className="home">
            <Link to={"/my-bucket"}>
              <CartSvg />
            </Link>
          </span>
          <ChartSvg />
          <UserSvg />
        </div>
      </div>
    </div>
  );
}

export default footer;
