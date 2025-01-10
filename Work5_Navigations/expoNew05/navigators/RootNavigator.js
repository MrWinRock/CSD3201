import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./StackNavigator";
// import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";
export default function RootNavigator() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
