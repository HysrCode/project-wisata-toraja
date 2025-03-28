import React from "react";
import "./Navbar.css";

// icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  //State to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // func to show navbar
  const showNavbar = () => {
    setNavBar("menu showNavbar");
  };
  // func to remove navbar
  const removeNavbar = () => {
    setNavBar("menu");
  };
  return (
    <div className="navBar">
      <div className="logoDiv">
        <Link to="/" className="customLink">
          <BiLogoMediumOld className="icon" />
          <span>Indahnya Toraja</span>
        </Link>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">
            <Link to="/tujuan" className="customLink">Tujuan</Link>
          </li>
          <li className="navList">
            <Link to="/about" className="customLink">Tentang Toraja</Link>
          </li>
          <li className="navList">
            <Link to="/lokasi" className="customLink">Lokasi</Link>
          </li> 
          <li className="navList">
            <Link to="/galeri" className="customLink">Galeri</Link>
          </li>
        </ul>
        {/* icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <button className="signUpBtn btn">
        Sign Up
        {/* icon to toggle navbar */}
      </button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
