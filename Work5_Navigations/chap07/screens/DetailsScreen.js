import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { itemId, itemName, itemAuthor } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{itemName}</Text>
        <Text style={styles.text}>Author: {itemAuthor}</Text>
        <Text style={styles.text}>ID: {itemId}</Text>
        <Button
          title="Go to Home"
          color={"#186b50"}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    padding: 32,
    marginVertical: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    alignItems: "center",
  },
});
