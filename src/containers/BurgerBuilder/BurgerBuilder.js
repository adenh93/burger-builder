import React, { Component } from "react";
import Burger from "../../components/Burger";
import { IngredientType } from "../../constants/enums";

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: IngredientType.SALAD, amount: 1 },
      { type: IngredientType.BACON, amount: 1 },
      { type: IngredientType.MEAT, amount: 1 },
      { type: IngredientType.CHEESE, amount: 1 },
      { type: IngredientType.MEAT, amount: 1 }
    ]
  };

  render() {
    const { ingredients } = this.state;

    return (
      <>
        <Burger ingredients={ingredients} />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
