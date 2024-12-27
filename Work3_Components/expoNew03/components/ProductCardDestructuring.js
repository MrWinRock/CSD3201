import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";

const ProductCardDestructuring = ({ name, price }) => {
  return (
    <View style={styles.card}>
      <Text>Product Name: {name}</Text>
      <Text>Price: ฿{price}</Text>
    </View>
  );
};

export default ProductCardDestructuring;
