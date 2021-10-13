/*************************************************
 * FoodOrderApp
 * @exports
 * index.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { cartState } from "./CartReducer";

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
  cartState,
});

export default rootReducer;
