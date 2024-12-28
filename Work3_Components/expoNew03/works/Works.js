import React from "react";
import { ScrollView, View } from "react-native";
import workStyles from "./../styles/workStyles";
import ViewComponent from "../components/ViewComponent";
import products from "./products";
import Greetings from "../workComponents/Greetings";
import ProductList from "../workComponents/ProductList";
import InputDisplay from "../workComponents/InputDisplay";

const Works = () => {
  return (
    <ScrollView>
      <View style={workStyles.container}>
        <View style={workStyles.programs}>
          <View style={workStyles.programCard}>
            <ViewComponent title="Welcome App" />
            <Greetings />
          </View>

          <ScrollView style={workStyles.programCard}>
            <ViewComponent title="Product List" />
            {products.map((product, index) => (
              <ProductList
                key={index}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
          </ScrollView>

          <View style={workStyles.programCard}>
            <ViewComponent title="User Input Display" />
            <InputDisplay />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Works;
