import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import { INGREDIENT_PRICES } from "../../constants/ingredientPrices";

class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 0
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const ingredient = ingredients.find(i => i.type === type);

    const newIngredients = ingredient
      ? ingredients.map(i =>
          i.type === type ? { ...i, amount: i.amount + 1 } : i
        )
      : [...ingredients, { type, amount: 1 }];

    this.setState({
      ingredients: newIngredients,
      totalPrice: totalPrice + INGREDIENT_PRICES[type]
    });
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const ingredient = ingredients.find(i => i.type === type);

    if (!ingredient || ingredient.amount <= 0) return;

    ingredient.amount -= 1;

    const newIngredients = ingredient.amount
      ? ingredients.map(i => (i.type === type ? { ...ingredient } : i))
      : ingredients.filter(i => i.type !== type);

    this.setState({
      ingredients: newIngredients,
      totalPrice: totalPrice - INGREDIENT_PRICES[type]
    });
  };

  render() {
    const { ingredients } = this.state;

    const enabledControls = ingredients.reduce(
      (result, { type, amount }) => amount && { ...result, [type]: true },
      {}
    );

    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          enabledControls={enabledControls}
        />
      </>
    );
  }
}

export default BurgerBuilder;
