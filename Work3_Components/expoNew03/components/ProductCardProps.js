import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";

const ProductCardProps = (props) => {
  return (
    <View style={styles.card}>
      <Text>Product Name: {props.name}</Text>
      <Text>Price: ฿{props.price}</Text>
    </View>
  );
};

export default ProductCardProps;
