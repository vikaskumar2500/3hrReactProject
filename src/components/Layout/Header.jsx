import Cart from "../Cart/Cart";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>TshirtStore</h1>
      <Cart />
    </div>
  );
};

export default Header;
