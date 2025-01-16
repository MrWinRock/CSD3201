import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const books = [
  { id: 1, name: "Book 1", author: "Author 1" },
  { id: 2, name: "Book 2", author: "Author 2" },
  { id: 3, name: "Book 3", author: "Author 3" },
  { id: 4, name: "Book 4", author: "Author 4" },
  { id: 5, name: "Book 5", author: "Author 5" },
  { id: 6, name: "Book 6", author: "Author 6" },
  { id: 7, name: "Book 7", author: "Author 7" },
  { id: 8, name: "Book 8", author: "Author 8" },
  { id: 9, name: "Book 9", author: "Author 9" },
  { id: 10, name: "Book 10", author: "Author 10" },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {books.map((book) => (
          <View key={book.id} style={styles.card}>
            <Text style={styles.title}>{book.name}</Text>
            <Button
              title="Book's Details"
              color={"#186b50"}
              onPress={() =>
                navigation.navigate("Details", {
                  itemId: book.id,
                  itemName: book.name,
                  itemAuthor: book.author,
                })
              }
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
