import React from "react";
import { Text, View, Image } from "react-native";
import workStyles from "../styles/workStyles";

const ProductList = (props) => {
  return (
    <View style={workStyles.productCard}>
      <Image source={props.imageUrl} style={workStyles.productImage} />
      <Text style={workStyles.productName}>Product Name: {props.name}</Text>
      <Text style={workStyles.productPrice}>Price: ฿{props.price}</Text>
    </View>
  );
};

export default ProductList;
