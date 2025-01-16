import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.userName}>Pharthiwath</Text>
        <Text style={styles.userEmail}>s65122250031@ssru.ac.th</Text>
      </View>
      <View style={styles.menuSection}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

function handleLogout(props) {
  alert("Logged out successfully!");
  props.navigation.reset({
    index: 0,
    routes: [{ name: "Login" }],
  });
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#7ab2d3",
    padding: 16,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#fff",
    fontSize: 14,
  },
  menuSection: {
    flex: 1,
    paddingTop: 10,
  },
  logoutButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f44336",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
