import React, { useState } from "react";
import "./Navbar.scss";
import { FaStore, FaTimes, FaBars } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const [click, setClick] = useState();
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar-wrapper container">
        <a className="navbar-home">
          <FaStore />
          SunStore
        </a>
        <div className="navbar-menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className="navbar-list-home">
          {/* <div className="navbar-list-both"> */}
          <ul className={click ? "navbar-menu active" : "navbar-menu "}>
            <Link to="/" className="navbar-list-item" onClick={handleClick}>
              Home
            </Link>
            <Link
              to="products"
              className="navbar-list-item"
              onClick={handleClick}
            >
              Product
            </Link>
            <li className="navbar-list-item" onClick={handleClick}>
              About
            </li>
            <li className="navbar-list-item" onClick={handleClick}>
              Contact
            </li>
          </ul>
        </div>

        <div className="navbar-button-list">
          <a className="navbar-button-item">
            <CgLogIn className="navbar_icon-login" />
            Login
          </a>
          <a className="navbar-button-item">
            <FaUserPlus className="navbar_icon-login" />
            Register
          </a>
          <Link to="/cart" className="navbar-button-item">
            <BsCartPlus className="navbar_icon-login" />
            Cart({state.length})
          </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Navbar;
