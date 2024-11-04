import React from "react"
import "./Footer.css"
import { BiLogoMediumOld } from "react-icons/bi"
import { ImFacebook } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <BiLogoMediumOld className="icon" />
                        <span>Indahnya Toraja</span>
                    </div>

                    <div className="socials flex">
                        <ImFacebook className="icon" />
                        <BsTwitter className="icon" />
                        <AiFillInstagram className="icon"/>
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">
                            Informasi
                        </span>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Explore</a>    
                        </li>
                        <li>
                            <a href="">Travel</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">
                            Link Bantuan
                        </span>
                            <li>
                                <a href="">Destination</a>
                            </li>
                            <li>
                                <a href="">Support</a>
                            </li>
                            <li>
                                <a href="">Travel & Condition</a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">Contacs Details</span>
                        <span className="phone">12 3456 78 9</span>
                        <span className="email">toraja_indah@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer