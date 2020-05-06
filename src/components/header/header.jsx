import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = ({ options = [] }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        {options.map(({ text, path }) => (
          <Link className="option" to={path}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
