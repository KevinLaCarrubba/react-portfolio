import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <h1>Kevin LaCarrubba</h1>
      <nav>
        <ul>
          <li className="navLink">
            <Link to="/">AboutMe</Link>
          </li>
          <li className="navLink">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="navLink">Resume</li>
        </ul>
      </nav>
    </header>
  );
}
