import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
        <Ionicons name={"settings"} size={48} color="#7ab2d3" />
      </View>
    </ScrollView>
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
