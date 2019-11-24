import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";
import { IngredientType } from "../../constants/enums";

const Burger = ({ ingredients }) => {
  const fillings = ingredients.map(({ type, amount }, index) =>
    [...Array(amount).keys()].map(i => (
      <BurgerIngredient key={`${index}_${i}`} type={type} />
    ))
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={IngredientType.BREADTOP} />
      {fillings}
      <BurgerIngredient type={IngredientType.BREADBOTTOM} />
    </div>
  );
};

export default Burger;
