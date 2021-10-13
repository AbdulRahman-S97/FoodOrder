/*************************************************
 * FoodOrderApp
 * @exports
 * @function App.js
 * Created by Abdul Rahman on 11/10/2021
 *************************************************/

"use strict";

import React from "react";
import { Provider } from "react-redux";
import { persist, store } from "./app/store";
import RouteNavigator from "./app/index";

const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigator></RouteNavigator>
    </Provider>
  );
};

export default App;
