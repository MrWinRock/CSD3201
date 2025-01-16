import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HybridTabNavigator from "./HybridTabNavigator";
import Settings from "../ecommerce/Settings";

const Drawer = createDrawerNavigator();
export default function HybridDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HybridTabNavigator}
        options={{ headerTitle: "E-Commerce App" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "E-Commerce App" }}
      />
    </Drawer.Navigator>
  );
}
