import React, { useState } from "react";
import {
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
  View,
} from "react-native";
import styles from "../styles/styles";

const ImageComponent = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View contentContainerStyle={styles.imageContainer}>
      <Image
        source={require("../assets/local-image.png")}
        style={styles.image}
      />

      <Text style={styles.imageText}>Remote Image Example</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/87/d3/eb/87d3ebd45e7a220c07b930f898c570a3.jpg",
        }}
        style={styles.image}
      />

      <Text style={styles.imageText}>Image Background Example</Text>
      <ImageBackground
        source={{
          uri: "https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.overlayText}>Hello on Background!</Text>
      </ImageBackground>

      <Text style={styles.imageText}>Placeholder Image Example</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image
        source={{
          uri: "https://www.veipd.org/earlyintervention/wp-content/uploads/2015/12/gift-281x300.jpg",
        }}
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default ImageComponent;
