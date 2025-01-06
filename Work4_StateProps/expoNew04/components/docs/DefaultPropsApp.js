import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

const Greeting = ({ name = "Guest" }) => {
  return <Text style={styles.text}>Hello, {name}!</Text>;
};

const DefaultPropsApp = () => {
  return (
    <View style={styles.programContainer}>
      <Greeting name="Nonglak" />
      <Greeting />
    </View>
  );
};

export default DefaultPropsApp;
