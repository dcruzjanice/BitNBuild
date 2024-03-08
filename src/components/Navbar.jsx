import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <h3>CorruptionWatch</h3>
    </NavLink>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
          exact
          className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink exact className="nav-link" to="/casemanagementsystem">Management System</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink exact className="nav-link" to="https://dust-digit-cry-months.trycloudflare.com/">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
        
        
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
    </>
  );
};

export default Navbar
