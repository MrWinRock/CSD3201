import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../fitness/Dashboard";
import Workouts from "../fitness/Workouts";
import Profile from "../fitness/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "desktop" : "desktop-outline";
          } else if (route.name === "Workouts") {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#3c6ca5",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Workouts" component={Workouts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
