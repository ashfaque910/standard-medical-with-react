import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-wrapper">
          <Link className="navbar-brand" to="/">
            <img src="./images/medical-bag-1674902_640.png" alt="" />
            <p>Standard Medical</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ color: "#00fbff54", fontSize: "1.3rem" }}
                  className="nav-link active"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointment">
                  Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointmentdisplay">
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/homecart">
                  Home Cart 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
              
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
