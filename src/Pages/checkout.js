import React, { useState } from "react";
import BackSvg from "./components/icons/backSvg";
import DebitCreditCardIcon from "../assets/DebitCard.png";
import PayPalIcon from "../assets/paypal.png";
import PayoneerIcon from "../assets/payoneer.png";
import { Link } from "react-router-dom";
function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-4 col-sm-4 text-start">
            <Link to={"/my-bucket"}>
              <BackSvg />
            </Link>
          </div>
          <div className="col-4 col-sm-4 text-center text-orange">
            <h4>
              <strong>Payment Details</strong>
            </h4>
          </div>
          <div className="col-4 col-sm-4 text-end">
            <h4>
              <strong>Checkout</strong>
            </h4>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card p-4">
              <div className="mb-3">
                <div className="payment-section">
                  <div
                    className={`payment-option ${
                      selectedPaymentMethod === "debitCreditCard"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setSelectedPaymentMethod("debitCreditCard")}
                  >
                    <img className="me-2" src={DebitCreditCardIcon} />
                    <span>Debit/Credit card</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="debitCreditCard"
                      checked={selectedPaymentMethod === "debitCreditCard"}
                      readOnly
                    />
                  </div>
                  <hr />
                  <div
                    className={`payment-option ${
                      selectedPaymentMethod === "paypal" ? "active" : ""
                    }`}
                    onClick={() => setSelectedPaymentMethod("paypal")}
                  >
                    <img className="me-2" src={PayPalIcon} />
                    <span>PayPal</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={selectedPaymentMethod === "paypal"}
                      readOnly
                    />
                  </div>
                  <hr />
                  <div
                    className={`payment-option ${
                      selectedPaymentMethod === "payoneer" ? "active" : ""
                    }`}
                    onClick={() => setSelectedPaymentMethod("payoneer")}
                  >
                    <img className="me-2" src={PayoneerIcon} />
                    <span>Payoneer</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="payoneer"
                      checked={selectedPaymentMethod === "payoneer"}
                      readOnly
                    />
                  </div>
                </div>
                <hr></hr>
                <div className="details-section">
                  <h3>Delivery details</h3>
                  <p className="address">789 Maple Street, Los Angeles, CA 90001</p>
                  <p className="phone">(888) 987-6543</p>
                  <h3>Order details</h3>
                  <ul className="order-items">
                    <li>1x Green salad</li>
                    <li>1x Fresh vegetable</li>
                    <li>1x Mixed salad</li>
                    <li>3x Grilled steak</li>
                    <li>1x Vegan cake</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-transparent">
        <div className="container">
          <div className="footer-navbar justify-content-between">
            <div className="d-flex flex-column">
              <span className="text-secondary text-start">price</span>
              <h4 className="mt-0">
                25.27 <span className="text-orange"> $</span>
              </h4>
            </div>
            <div>
              <Link to={"/success"}>
                <button className="btn btn-orange p-2 px-4">Pay</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
