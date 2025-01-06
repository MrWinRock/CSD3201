import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/styles";

const TriangleAreaApp = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);

    if (!isNaN(baseValue) && !isNaN(heightValue)) {
      const calculatedArea = 0.5 * baseValue * heightValue;
      setArea(calculatedArea.toFixed(2));
    } else {
      setArea("Invalid Input");
    }
  };

  return (
    <View style={styles.programContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter base"
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter height"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate" onPress={calculateArea} />
      {area !== null && (
        <Text style={styles.result}>
          {isNaN(area) ? area : `Area: ${area} square units`}
        </Text>
      )}
    </View>
  );
};

export default TriangleAreaApp;
