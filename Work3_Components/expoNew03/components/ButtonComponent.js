import React from "react";
import { Text, View, Button, Pressable, Alert } from "react-native";
import styles from "../styles/styles";

const ButtonComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Press Me"
        onPress={() => Alert.alert("Button Pressed", "You clicked the button!")}
      />
      <Text style={styles.nameText}>Colored Button Example</Text>
      <Button
        title="Blue Button"
        color="blue"
        onPress={() =>
          Alert.alert("Button Pressed", "You clicked the blue button!")
        }
      />
      <Text style={styles.nameText}>Custom Button Example</Text>
      <Pressable
        style={({ pressed }) => [
          styles.customButton,
          { backgroundColor: pressed ? "#ddd" : "#007BFF" },
        ]}
        onPress={() => Alert.alert("Button Pressed", "Custom button clicked!")}
      >
        <Text style={styles.buttonText}>Custom Button</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
