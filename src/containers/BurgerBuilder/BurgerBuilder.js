import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary";
import Modal from "../../components/UI/Modal";
import { INGREDIENT_PRICES } from "../../constants/ingredientPrices";

class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 1.75
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
    const { ingredients, totalPrice } = this.state;

    const enabledControls = ingredients.reduce(
      (result, { type, amount }) => amount && { ...result, [type]: true },
      {}
    );

    return (
      <>
        <Modal>
          <OrderSummary ingredients={ingredients} total={totalPrice} />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          enabledControls={enabledControls}
        />
      </>
    );
  }
}

export default BurgerBuilder;
