/*************************************************
 * FoodOrderApp
 * @exports
 * @function CartActions.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import Constants from "../utils/Constants";

export const updateCount = (value, index, type, id) => {
  return (dispatch, getState) => {
    let count;
    let tempArray = getState().cartState.menuArray;
    let cartArray = [];
    let arrayIndex = tempArray.findIndex((obj) => obj.id === id);
    if (type === "add") {
      count = getState().cartState.cartCount + 1;
      tempArray[arrayIndex].quantity = tempArray[arrayIndex].quantity + 1;
    } else {
      count = getState().cartState.cartCount - 1;
      tempArray[arrayIndex].quantity = tempArray[arrayIndex].quantity - 1;
    }
    cartArray = tempArray.filter((item) => item.quantity > 0);
    console.log("cartAAAA", cartArray);
    dispatch({
      type: Constants.ACTIONS.CART_COUNT_UPDATE,
      cartCount: count,
    });
    dispatch({
      type: Constants.ACTIONS.UPDATE_MENU_LIST,
      menuArray: tempArray,
    });
    dispatch({
      type: Constants.ACTIONS.UPDATE_CART_ARRAY,
      cartArray: cartArray,
    });
  };
};
