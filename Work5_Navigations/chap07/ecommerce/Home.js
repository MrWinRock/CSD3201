import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
  { id: 6, name: "Product 6", price: 600 },
  { id: 7, name: "Product 7", price: 700 },
  { id: 8, name: "Product 8", price: 800 },
  { id: 9, name: "Product 9", price: 900 },
  { id: 10, name: "Product 10", price: 1000 },
  { id: 11, name: "Product 11", price: 1100 },
  { id: 12, name: "Product 12", price: 1200 },
];

export default function Home({ navigation }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => (
        <View key={product.id} style={styles.card}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>฿{product.price}</Text>
          <Button
            title="Product's Details"
            color={"#3c6ca5"}
            onPress={() =>
              navigation.navigate("Product", {
                id: product.id,
                name: product.name,
                price: product.price,
              })
            }
          />
        </View>
      )}
      keyExtractor={(product) => product.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    flex: 1,
    maxWidth: "48%", // 2% margin on each side
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
});
