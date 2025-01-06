import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/styles";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState(null);

  const calculate = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
      const bmiValue = weightValue / (heightValue * heightValue);
      setBMI(bmiValue);

      let categoryValue = "";
      if (bmiValue < 18.5) {
        categoryValue = "Underweight";
      } else if (bmiValue < 24.9) {
        categoryValue = "Normal weight";
      } else if (bmiValue < 29.9) {
        categoryValue = "Overweight";
      } else {
        categoryValue = "Obesity";
      }
      setCategory(categoryValue);
    } else {
      alert("Enter valid values");
    }
  };

  return (
    <View style={styles.programContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter height (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate" onPress={calculate} />

      {bmi !== null ? (
        <Text style={styles.result}>
          {`BMI: ${bmi.toFixed(2)} (${category})`}
        </Text>
      ) : (
        <Text style={styles.result}>{"Enter valid values"}</Text>
      )}
    </View>
  );
};

export default BMICalculator;
