import React from "react"
import "./Subscribe.css"
import image1 from "../../Assets/subscribe/patung.jfif"

const Subscribe = () => {
    return (
        <div className="subscribe section container">
            <div className="secContainer grid">
                <img src={image1} alt="div Img" />
                <div className="textDiv">
                    <h4>Best way to start your journey</h4>
                    <p>We offer profesionalized itineraries tailored to individual preferences and interest</p>
                    <button className="btn">Start Here</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe