import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="sidebar" className="sidebar  w3-bar-block w3-xxlarge">
      <div id="about-me">
        <Link to="/AboutMe" className="w3-bar-item w3-button">
          <i className="fas fa-user"></i>
        </Link>
      </div>
      <div id="notifications">
        <Link to="/notifications" className="w3-bar-item w3-button">
          <i className="far fa-heart"></i>
        </Link>
      </div>
      <div id="location">
        <Link to="/location" className="w3-bar-item w3-button">
          <i className="fas fa-map-marker-alt"></i>
        </Link>
      </div>
      <div id="warning">
        <Link to="/warning" className="w3-bar-item w3-button">
          <i className="fas fa-exclamation-triangle"></i>
        </Link>
      </div>
      <div id="geofences">
        <Link to="/geofences" className="w3-bar-item w3-button">
          <i className="fas fa-crosshairs"></i>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
