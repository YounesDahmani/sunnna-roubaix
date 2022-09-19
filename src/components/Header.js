import React from "react";

const Header = ({ title, img }) => {
  return (
    <div className="header">
      <img src={img} alt="ouiiii" />
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
