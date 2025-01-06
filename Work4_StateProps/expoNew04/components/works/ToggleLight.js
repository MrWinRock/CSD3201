import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../../styles/styles";

const ToggleLight = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={isOn ? styles.programContainer : styles.programContainerDark}>
      <Text style={isOn ? styles.text : styles.textDark}>
        The light is {isOn ? "ON" : "OFF"}
      </Text>
      <Button title="Toggle Light" onPress={toggleLight} />
    </View>
  );
};

export default ToggleLight;
