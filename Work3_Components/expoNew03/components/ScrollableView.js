import React from "react";
import { ScrollView, View } from "react-native";
import styles from "../styles/styles";
import ProductCardProps from "./ProductCardProps";

const ScrollableView = ({ items }) => {
  return (
    <View style={styles.scrollableViewContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        nestedScrollEnabled={true}
      >
        {items.map((item, index) => (
          <ProductCardProps key={index} name={item.name} price={item.price} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollableView;
