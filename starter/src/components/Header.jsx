import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./header.css";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className="nav_button">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="nav_button">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
