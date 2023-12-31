import React, { useState } from "react";
import BackSvg from "./components/icons/backSvg";
import HeartSvg from "./components/icons/heartSvg";
import StarSvg from "./components/icons/starSvg";
import PlusSvg from "./components/icons/plusSvg";
import MinusSvg from "./components/icons/minusSvg";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
function ProductDetails(props) {
  let [counter, setCounter] = useState(1);
  const { data } = useData();
  return (
    <div>
      <div className="productDetails">
        <div className="header">
          <Link to={"/"} className="backButton">
            <BackSvg />
          </Link>
          <HeartSvg className="heartButton" check={data.liked} />
        </div>
        <div className="content">
          <h1 className="productTitle">{data.imageName}</h1>
          <p className="productSubtitle">By Steak house</p>
          <div className="rating d-flex justify-content-center align-items-center">
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <span className="ms-2 mb-0">
              {" "}
              <strong> 5 </strong>
            </span>
          </div>
          <p className="description">
            Indulge in the mouthwatering delight of a perfectly grilled beef
            steak generously topped with a rich and savory mushroom sauce.
          </p>
          <div className="d-flex flex-column">
            <div>
              <img src={data.image} alt="" className="productImage" />
            </div>
            <div className="counter">
              <PlusSvg onClick={() => setCounter++} />
              <span className="counterValue">{counter}</span>
              <MinusSvg onClick={() => setCounter--} />
            </div>
          </div>
        </div>

        <div className="footer">
          <span className="priceLabel">price</span>
          <span className="price">{data.price} $</span>
          <Link to={"/my-bucket"}>
            <button className="addToCartButton">Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
