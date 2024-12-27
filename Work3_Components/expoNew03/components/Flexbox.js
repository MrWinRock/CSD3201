import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";

const Flexbox = () => {
  return (
    <View style={styles.flexBoxContainer}>
      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

export default Flexbox;
