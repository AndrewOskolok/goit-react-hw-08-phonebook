import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header__list">
      <Link to="/login" className="header__item">
        Login
      </Link>
      <Link to="/registration" className="header__item">
        Register
      </Link>
    </ul>
  );
};

export default Header;
