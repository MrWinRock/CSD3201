import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";

const NestedView = () => {
  return (
    <View style={styles.nestedViewContainer}>
      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Child 1</Text>
        </View>
        <View style={styles.child}>
          <Text>Child 2</Text>
        </View>
      </View>
    </View>
  );
};

export default NestedView;
