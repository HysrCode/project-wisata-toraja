import React from "react";
import { useNavigate } from "react-router-dom";

const Pin = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to detail page with ID:", props.id);
    // Navigasi ke halaman detail dengan data yang diteruskan
    if (props.id) {
      console.log("udah")
      navigate(`/details/${props.id}`, {
        state: { data: props.id },
      });
    } else {
      console.error("ID is missing. Cannot navigate to details page.");
    }
  };

  return (
    <div className={`pin ${props.size}`} onClick={handleClick}>
      <img src={props.image} alt={props.alt || "Pin Image"} />
      {props.children && <div className="pin-content">{props.children}</div>}
    </div>
    
  );
};

export default Pin;
