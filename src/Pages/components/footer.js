import React from "react";
import HomeSvg from "./icons/homeSvg";
import CartSvg from "./icons/cartSvg";
import UserSvg from "./icons/userSvg";
import ChartSvg from "./icons/chartSvg";
import HeartSvg from "./icons/heartSvg";
function footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-navbar">
          <span className="text-orange">
            <HomeSvg />
          </span>
          <HeartSvg />
          <span className="home">
            <CartSvg />
          </span>
          <ChartSvg />
          <UserSvg />
        </div>
      </div>
    </div>
  );
}

export default footer;
