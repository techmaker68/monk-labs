import React, { useState } from "react";
import BackSvg from "./components/icons/backSvg";
import { dataArray } from "../data/dummyData";
import { Link } from "react-router-dom";


function MyBucket(props) {
  const [items, setItems] = useState(dataArray);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-4 col-sm-4 text-start">
            <Link to={"/product-detail"}>
              <BackSvg />
            </Link>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <h4 className="p-text-orange">
              <>Additional items</>
            </h4>
          </div>
          <div className="col-4 col-sm-4 text-end">
            <h4>
              <strong>My Bucket</strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-6 col-12 col-sm-12 col-lg-4">
              <div className="card p-3 mb-3 shadow cursor-pointer">
                <div className="row g-0">
                  <div className="col-4">
                    <div className="imgBucket">
                      <img src={item.image} alt="..." />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body py-0">
                      <h5 className="card-title">{item.imageName}</h5>
                      <p className="card-text d-flex justify-content-between">
                        <small className="text-muted ms-0">Quantity 2</small>{" "}
                        <small className="text-orange">
                          <span>$</span> {item.price}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer ">
        <div className="container">
          <div className="footer-navbar justify-content-between">
            <div>
              <span className="text-secondary text-start">price</span>
              <h4 className="mt-0">
                25.27 <span className="text-orange"> $</span>
              </h4>
            </div>
            <div>
              <Link to={"/checkout"}>
                <button className="btn btn-orange p-2 px-4">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBucket;
