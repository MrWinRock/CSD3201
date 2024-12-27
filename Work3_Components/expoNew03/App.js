import React from "react";
import { ScrollView, View, Text } from "react-native";
import ViewComponent from "./components/ViewComponent";
import ProductCardProps from "./components/ProductCardProps";
import ProductCardDestructuring from "./components/ProductCardDestructuring";
import SimpleMessage from "./components/SimpleMessage";
import styles from "./styles/styles";
import Flexbox from "./components/Flexbox";
import NestedView from "./components/NestedView";
import ScrollableView from "./components/ScrollableView";
import TextComponent from "./components/TextComponent";
import ImageComponent from "./components/ImageComponent";

const items = [
  { name: "items 1", price: 100 },
  { name: "items 2", price: 200 },
  { name: "items 3", price: 300 },
  { name: "items 4", price: 400 },
  { name: "items 5", price: 500 },
  { name: "items 6", price: 600 },
];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.programs}>
          <View style={styles.programCard}>
            <ViewComponent title="Product Card Props" />
            {items.map((item, index) => (
              <ProductCardProps
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Product Card Destructuring" />
            {items.map((item, index) => (
              <ProductCardDestructuring
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Simple " />
            <SimpleMessage />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Flexbox Layout" />
            <Flexbox />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Nested View" />
            <NestedView />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Scrollable View" />
            <ScrollableView items={items} />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Text Component" />
            <TextComponent />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Image Component" />
            <ImageComponent />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
