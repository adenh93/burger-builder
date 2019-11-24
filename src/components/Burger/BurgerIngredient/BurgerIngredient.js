import React from "react";
import classes from "./BurgerIngredient.module.css";
import { IngredientType } from "../../../constants/enums";
import PropTypes from "prop-types";

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

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
