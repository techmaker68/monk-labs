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
      <div class="mainSection">
        <div class="topSec">
          <div class="container pt-5">
            <div class="row">
              <div class="col-6 text-start">
                <Link to={"/"}>
                  <BackSvg />
                </Link>
              </div>
              <div class="col-6 text-end">
                <HeartSvg check={data.liked} />
              </div>
            </div>
          </div>
          <div class="container mt-3">
            <h2 class="productTitle mb-0">{data.imageName}</h2>
            <p class="text-secondary my-0">By Steak house</p>
            <div class="d-flex align-items-center mb-3 ">
              <StarSvg />
              <span class="d-block ms-2">4.6</span>
            </div>
          </div>
          <div class="container">
            <div class="counter">
              <div className="text-start" onClick={() => setCounter(counter++)}>
                <PlusSvg />
              </div>
              <span class="ml text-start">{counter}</span>
              <div
                className="text-start"
                onClick={() => setCounter(counter !== 0 ? counter-- : 0)}
              >
                <MinusSvg />
              </div>
              <div class="productDesc">
                <strong class="d-block">Description</strong>
                <span class="text-secondary">
                  Indulge in the mouthwatering delight of a perfectly grilled
                  beef steak generously topped with a rich and savory mushroom
                  sauce.
                </span>
              </div>
            </div>
            <div>
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
        <div class="footer bg-transparent">
          <div class="container">
            <div class="footer-navbar justify-content-between">
              <div>
                <span class="text-secondary">price</span>
                <h4 class="mt-0">
                  {data.price} <span class="text-orange"> $</span>
                </h4>
              </div>
              <div>
                <Link to={'/my-bucket'}>
                <button class="btn btn-orange p-2 px-4">Add to cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
