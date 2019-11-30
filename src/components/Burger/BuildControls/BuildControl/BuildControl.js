import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = ({ label, addIngredient, removeIngredient, disabled }) => {
  const onClickLess = () => removeIngredient(label);
  const onClickMore = () => addIngredient(label);

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        disabled={disabled}
        onClick={onClickLess}
      >
        Less
      </button>
      <button className={classes.More} onClick={onClickMore}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
