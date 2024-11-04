import React from "react"
import "./Navbar.css"

// icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    //State to track and update navbar
    const [navBar, setNavBar] = useState("menu")
    // func to show navbar
    const showNavbar = () => {
        setNavBar("menu showNavbar")
    }
    // func to remove navbar
    const removeNavbar = () => {
        setNavBar("menu")
    }
    return (
        <div className="navBar">
            <div className="logoDiv">
                <BiLogoMediumOld className="icon" />
                <span>Indahnya Toraja</span>
            </div>

            <div className={navBar}>
                <ul>
                    <li className="navList">
                        Tujuan
                    </li>
                    <li className="navList">
                        Tentang Toraja
                    </li>
                    <li className="navList">
                        Testimoni
                    </li>
                    <li className="navList">
                        Galeri
                    </li>
                </ul>
            {/* icon to remove navbar */}
            <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
            </div>
            <button className="signUpBtn btn">
                Sign Up
                {/* icon to toggle navbar */}
            </button>
            <PiDotsNineBold className="icon menuIcon" onClick={showNavbar}/>
        </div>
    )
}

export default Navbar