import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./../styles/styles";
import ViewComponent from "./../components/ViewComponent";
import ProductCardProps from "./../components/ProductCardProps";
import ProductCardDestructuring from "./../components/ProductCardDestructuring";
import SimpleMessage from "./../components/SimpleMessage";
import Flexbox from "./../components/Flexbox";
import NestedView from "./../components/NestedView";
import ScrollableView from "./../components/ScrollableView";
import TextComponent from "./../components/TextComponent";
import ImageComponent from "./../components/ImageComponent";
import ButtonComponent from "./../components/ButtonComponent";
import ScrollViewPage from "./../components/ScrollViewPage";
import TextInputPage from "./../components/TextInputPage";

const items = [
  { name: "items 1", price: 100 },
  { name: "items 2", price: 200 },
  { name: "items 3", price: 300 },
  { name: "items 4", price: 400 },
  { name: "items 5", price: 500 },
  { name: "items 6", price: 600 },
];

const Docs = () => {
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

          <View style={styles.programCard}>
            <ViewComponent title="Button Component" />
            <ButtonComponent />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Scroll View" />
            <ScrollViewPage />
          </View>

          <View style={styles.programCard}>
            <ViewComponent title="Text Input" />
            <TextInputPage />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Docs;
