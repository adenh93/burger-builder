import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import { IngredientType } from "../../../constants/enums";

const controls = [
  { label: "Salad", type: IngredientType.SALAD },
  { label: "Bacon", type: IngredientType.BACON },
  { label: "Meat", type: IngredientType.MEAT },
  { label: "Cheese", type: IngredientType.CHEESE }
];

const BuildControls = ({
  price,
  addIngredient,
  removeIngredient,
  enabledControls
}) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {controls.map((control, index) => (
      <BuildControl
        key={index}
        {...control}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        disabled={!enabledControls[control.type]}
      />
    ))}
  </div>
);

export default BuildControls;
