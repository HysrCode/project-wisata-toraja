import React from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import person1 from "../../Assets/review/person1.avif";
import person2 from "../../Assets/review/person2.avif";
import person3 from "../../Assets/review/person3.jpg";
import person4 from "../../Assets/review/person4.avif";
import person5 from "../../Assets/review/person5.avif";
import person6 from "../../Assets/review/reiview.jpg";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText"> From Our Clients</span>
          <h3>Real Travel History Form Our Beloved Clients</h3>
          <p>
            By Chooising us as their tour agency, cosutmers can expect an
            enchiring and enjoyable travel experience, filled width unforgetable
            memories that will last a lifetiime
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientImages flex">
            <img src={person1} alt="person1" />
            <img src={person2} alt="person2" />
            <img src={person3} alt="person3" />
            <img src={person4} alt="person4" />
            <img src={person5} alt="person5" />
          </div>
        </div>
        <div className="imageDiv">
          <img src={person6} alt="imagediv" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
