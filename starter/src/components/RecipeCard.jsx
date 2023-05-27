import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className={styles.recipe_card}>
      <div>
        <div className={styles.recipe_img_container}>
          <img src="https://www.tastingtable.com/img/gallery/16-types-of-lobster-explained/l-intro-1656418659.jpg"></img>
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
