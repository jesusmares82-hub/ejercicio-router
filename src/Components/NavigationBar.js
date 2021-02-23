import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">F.A.Q</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
