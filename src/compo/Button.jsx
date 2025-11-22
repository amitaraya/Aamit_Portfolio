import React from "react";
import "./Button.css"; // Ensure you have this CSS file for styling

const Button = ({ buttonName, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
