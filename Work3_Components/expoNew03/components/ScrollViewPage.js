import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "../styles/styles";

const ScrollViewPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {[...Array(20)].map((_, index) => (
        <Text key={index} style={styles.textItem}>
          Item {index + 1}
        </Text>
      ))}
      <ScrollView horizontal contentContainerStyle={styles.horizontalContent}>
        {[...Array(10)].map((_, index) => (
          <Text key={index} style={styles.horizontalItem}>
            Item {index + 1}
          </Text>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ScrollViewPage;
