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

    const price = INGREDIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: totalPrice + price
    });
  };

  removeIngredientHandler = type => {
    const ingredients = this.state.ingredients.map(i =>
      i.type === type ? { ...i, amount: i.amount - 1 } : i
    );

    const price = INGREDIENT_PRICES[type];

    this.setState({
      ingredients,
      totalPrice: this.state.totalPrice - price
    });
  };

  render() {
    const { ingredients } = this.state;

    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
