import React from "react";
import BackSvg from "./components/icons/backSvg";
import { Link } from "react-router-dom";
function checkout() {
  return (
    <div>
      <div class="container py-5">
        <div class="row">
          <div class="col-4 col-sm-5 text-start">
            <Link to={"/my-bucket"}>
              <BackSvg />
            </Link>
          </div>
          <div class="col-8 col-sm-7 text-end">
            <h4>
              <strong>Checkout</strong>
            </h4>
          </div>
        </div>
      </div>

      <div class="container mt-3">
        <div class="row">
          <h4>Payment</h4>
        </div>
      </div>

      <div class="footer bg-transparent">
        <div class="container">
          <div class="footer-navbar justify-content-between">
            <div>
              <span class="text-secondary">price</span>
              <h4 class="mt-0">
                25.27 <span class="text-orange"> $</span>
              </h4>
            </div>
            <div>
              <Link to={"/success"}>
                <button class="btn btn-orange p-2 px-4">Pay Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
