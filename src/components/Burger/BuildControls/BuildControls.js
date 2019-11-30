import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Meat", type: "Meat" },
  { label: "Cheese", type: "Cheese" }
];

const BuildControls = ({ addIngredient, removeIngredient }) => (
  <div className={classes.BuildControls}>
    {controls.map((control, index) => (
      <BuildControl
        key={index}
        {...control}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    ))}
  </div>
);

export default BuildControls;
