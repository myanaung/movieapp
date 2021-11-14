import React from "react";
import { Link } from "react-router-dom";
import Genres from "./Genres";

const NavBar = ({ data , onItemSelect , selectedItem}) => {
  return (
    <nav className="navbar navbar-light fixed-top">
      <div className="container-fluid">
        <div className="nav-text-container">
          <p className="nav-text">
            Welcome to <span className="l-title">L</span> Movie Store!
          </p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <span className="l-title">L</span> Channel
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/movieapp">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies Genres
                </a>
                <ul
                  className="dropdown-menu genresSelect"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <Genres data={data} onItemSelect={onItemSelect} selectedItem ={selectedItem}/>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
