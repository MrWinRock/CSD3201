import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../ecommerce/Home";
import Product from "../ecommerce/Product";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
