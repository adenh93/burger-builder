import React from "react";
import classes from "./BurgerIngredient.module.css";
import { IngredientType } from "../../../constants/enums";

const BurgerIngredient = ({ type }) => (
  <div className={classes[type]}>
    {type === IngredientType.BREADTOP && (
      <>
        <div className={classes.Seeds1} />
        <div className={classes.Seeds2} />
      </>
    )}
  </div>
);

export default BurgerIngredient;
