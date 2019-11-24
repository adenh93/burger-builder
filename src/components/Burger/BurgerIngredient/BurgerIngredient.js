import React from "react";
import PropTypes from "prop-types";
import { IngredientType } from "../../../constants/enums";
import classes from "./BurgerIngredient.module.css";

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
