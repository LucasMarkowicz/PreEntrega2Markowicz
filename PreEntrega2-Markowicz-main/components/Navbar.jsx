import React from "react";
import Cartwidget from "./Cartwidget";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Tienda Apple Import
            <img src="../public/images/Apple.png" className="logoApple"></img>
          </NavLink>
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
            <ul className="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink class="dropdown-item" to="/Iphones">
                      Iphones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Ipads">
                      Ipads
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Watches">
                      Apple Watches
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Macbooks">
                      Macbooks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Airpods">
                      Airpods
                    </NavLink>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link " to="/como-comprar">
                  Como comprar?
                </NavLink>
              </li>
            </ul>
          </div>

          <Cartwidget></Cartwidget>
        </div>
      </nav>
      <main></main>
    </div>
  );
}
