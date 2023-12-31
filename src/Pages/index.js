import React, { useState } from "react";
import cat from "../assets/cat.png";
import cat2 from "../assets/cat2.png";
import HeartSvg from "./components/icons/heartSvg";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { dataArray, categories } from "../data/dummyData";
import NavBar from "./components/navBar";
function Index() {
  const { data, setData } = useData();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [items, setItems] = useState(dataArray);
  const toggleSearchInput = () => {
    setSearchVisible((prevVisible) => !prevVisible);
  };
  function handleLikeToggle(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, liked: !item.liked } : item
      )
    );
  }

  function setDetails(details) {
    setData(details);
  }

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h2 className="text-start">Categories</h2>
          </div>

          <div className="col-6 text-end">
            <div className="search-toggle">
              {isSearchVisible && (
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button
                    onClick={toggleSearchInput}
                    className="btn btn-link text-orange"
                  >
                    Search
                  </button>
                </div>
              )}
              {!isSearchVisible && (
                <button
                  onClick={toggleSearchInput}
                  className=" btn btn-link text-orange"
                >
                  Search All
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="row scroll category">
          {categories.map((item, index) => (
            <div key={index} className="col-md-3 col-3">
              <div className="box1 category-box">
                <h4>{item.name}</h4>
                <img src={item.image} alt="Salad" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 recommended">
        <div className="row">
          <div className="col-md-6 col-8">
            <h2 className="text-start">Recommended Items</h2>
          </div>
          <div className="col-md-6 col-4 text-end">
            <button className="btn btn-link text-orange">Filter</button>
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-3 col-6 mb-4" key={item.id}>
              <div className="card border-0 shadow">
                <Link
                  to={`/product-detail/${item}`}
                  onClick={() => setDetails(item)}
                >
                  <img
                    src={item?.image}
                    className="card-img-top"
                    alt="Product Image"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.imageName}</h5>
                  <div className="d-flex justify-content-between">
                    <p className="card-text mb-0">
                      <span className="text-orange">$</span> {item.price}
                    </p>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleLikeToggle(item.id)}
                    >
                      <HeartSvg check={item.liked} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
