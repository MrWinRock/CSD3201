import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../travel/Home";
import Hotels from "../travel/Hotels";
import Flights from "../travel/Flights";
import CustomDrawerContent from "../components/CustomDrawerContent";
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Hotels" component={Hotels} />
      <Drawer.Screen name="Flights" component={Flights} />
    </Drawer.Navigator>
  );
}
