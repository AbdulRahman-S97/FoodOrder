/*************************************************
 * FoodOrderApp
 * @exports
 * @function RouteNavigator.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import MyCartScreen from "./screens/MyCartScreen";

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={RestaurantDetailScreen} />
        <Stack.Screen name="Cart" component={MyCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
