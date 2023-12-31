import React from "react";
import imageSuccess from '../assets/imageSuccess.png';
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="container py-5">
      <div className="container my-5 text-center">
        <h4>Congratulations!</h4>
        <h4>Your Order Has Been Placed!</h4>
        <img src={imageSuccess} className="mt-4" alt="success" style={{ width: '50%' }} />
        <p className="text-muted mt-4">
          Thank you for choosing our services! Your order has been successfully
          placed and is now being processed. <br/> We appreciate your trust in us and
          look forward to serving you.
        </p>
        <Link to={'/'}>
        <button className="btn btn-orange mt-4">Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
