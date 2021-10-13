import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigator;
