import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Workouts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <Ionicons name={"barbell"} size={256} color="#7ab2d3" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
