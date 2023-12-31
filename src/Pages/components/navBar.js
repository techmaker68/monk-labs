import React from "react";
import SearchSvg from "./icons/searchSvg";

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex flex-column" href="#">
          <strong>Hey Danyal 👋</strong>
          <small className=" text-start">It's Dinner Time</small>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <SearchSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
