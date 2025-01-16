import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Hotels() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotels</Text>
      <View style={styles.card}>
        <Text style={styles.hotelName}>Hotel 1</Text>
        <Text style={styles.hotelName}>Hotel 2</Text>
        <Text style={styles.hotelName}>Hotel 3</Text>
        <Text style={styles.hotelName}>Hotel 4</Text>
        <Text style={styles.hotelName}>Hotel 5</Text>
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
  hotelName: {
    fontSize: 20,
    marginBottom: 10,
    color: "#555",
  },
});
