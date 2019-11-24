import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";
import { IngredientType } from "../../constants/enums";

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={IngredientType.BREADTOP} />
      <BurgerIngredient type={IngredientType.CHEESE} />
      <BurgerIngredient type={IngredientType.MEAT} />
      <BurgerIngredient type={IngredientType.SALAD} />
      <BurgerIngredient type={IngredientType.BREADBOTTOM} />
    </div>
  );
};

export default Burger;
