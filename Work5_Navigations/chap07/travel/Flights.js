import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Flights() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flights</Text>
      <View style={styles.card}>
        <Text style={styles.flightName}>Flight 1</Text>
        <Text style={styles.flightName}>Flight 2</Text>
        <Text style={styles.flightName}>Flight 3</Text>
        <Text style={styles.flightName}>Flight 4</Text>
        <Text style={styles.flightName}>Flight 5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  flightName: {
    fontSize: 20,
    marginBottom: 10,
    color: "#555",
  },
});
