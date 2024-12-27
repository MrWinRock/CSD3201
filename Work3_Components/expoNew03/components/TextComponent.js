import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

const TextComponent = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textComponent}>
        Hello, This is basic text example!
      </Text>
    </View>
  );
};

export default TextComponent;
