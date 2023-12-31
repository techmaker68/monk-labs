import React, { useState } from "react";
import BackSvg from "./components/icons/backSvg";
import HeartSvg from "./components/icons/heartSvg";
import PlusSvg from "./components/icons/plusSvg";
import MinusSvg from "./components/icons/minusSvg";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import Rating from "./components/rating";
function ProductDetails() {
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
          <Rating />
          <p className="description">
            Savor the unparalleled flavors of our exquisite grilled beef steak,
            each bite promising a symphony of taste. Expertly seared to lock in
            its natural juices, our steak is a masterpiece of culinary
            excellence. The tenderness of the meat, complemented by the deep,
            earthy tones of a homemade mushroom sauce, creates an experience
            that's both comforting and indulgent. <br />
          </p>

          <div className="d-flex flex-column">
            <div className="counter">
              <PlusSvg onClick={() => setCounter(counter + 1)} />
              <span className="counterValue">{counter}</span>
              <MinusSvg
                onClick={() => setCounter(counter !== 0 ? counter - 1 : 0)}
              />
            </div>
            <div>
              <img src={data.image} alt="" className="productImage" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container d-flex justify-content-between align-items-end">
            <div className="d-flex flex-column">
              <span className="priceLabel text-start">price</span>
              <span className="price ">{data.price} $</span>
            </div>
            <Link to={"/my-bucket"}>
              <button className="addToCartButton ">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
