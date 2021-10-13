/*************************************************
 * FoodOrderApp
 * @exports
 * @function CartReducer.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import Constants from "../utils/Constants";

const menuListArray = [
  {
    id: 1,
    name: "Guac de la Costa",
    contents: "tortillas de mais, fruit de la passion, mango",
    cost: 7,
    quantity: 0,
  },
  {
    id: 2,
    name: "Chicharron u Cerveza",
    contents: "citron vert / Corona sauce",
    cost: 8,
    quantity: 0,
  },
  {
    id: 3,
    name: "Carta con Chilitos ",
    contents: "padrones, tortillas de mais, tomato tempure, ",
    cost: 10,
    quantity: 0,
  },
  {
    id: 4,
    name: "la Costa Guac de",
    contents: "fruit de la passion, tortillas de mais, mango",
    cost: 15,
    quantity: 0,
  },
  {
    id: 5,
    name: "Cerveza uChicharron ",
    contents: "Corona sauce / citron vert",
    cost: 25,
    quantity: 0,
  },
  {
    id: 6,
    name: "Chilitos con Carta",
    contents: "padrones tempure, tortillas de mais",
    cost: 10,
    quantity: 0,
  },
];

let initialState = {
  cartCount: 0,
  cartArray: [],
  menuArray: menuListArray,
};

const {
  ACTIONS: {
    CART_COUNT_UPDATE,
    RESET_CART_TO_INITIAL,
    UPDATE_MENU_LIST,
    UPDATE_CART_ARRAY,
  },
} = Constants;

export const cartState = (state = initialState, action) => {
  const { type, cartCount, menuArray, cartArray } = action;
  switch (type) {
    case CART_COUNT_UPDATE:
      return { ...state, cartCount };
    case UPDATE_MENU_LIST:
      return { ...state, menuArray };
    case UPDATE_CART_ARRAY:
      return { ...state, cartArray };
    case RESET_CART_TO_INITIAL:
      return { ...initialState };
    default:
      return state;
  }
};
