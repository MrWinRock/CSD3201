import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

const Greeting = ({ name }) => {
  return <Text style={styles.text}>Hello, {name}!</Text>;
};

const GreetingApp = () => {
  return (
    <View style={styles.programContainer}>
      <Greeting name="Somchai" />
      <Greeting name="Suda" />
    </View>
  );
};

export default GreetingApp;
