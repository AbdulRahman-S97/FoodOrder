/*************************************************
 * FoodOrderApp
 * @exports
 * @function CartReducer.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import Constants from "../utils/Constants";

let initialState = {
  cartCount: 0,
  cartArray: [],
};

const {
  ACTIONS: { CART_COUNT_UPDATE, RESET_CART_TO_INITIAL },
} = Constants;

export const cartState = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CART_COUNT_UPDATE:
      return { ...state, cartCount };
    case RESET_CART_TO_INITIAL:
      return { ...initialState };
    default:
      return state;
  }
};
