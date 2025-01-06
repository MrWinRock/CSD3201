import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/styles";

const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
      />
      <Button title="Submit" onPress={() => onSubmit(inputValue)} />
    </View>
  );
};

const FormParent = () => {
  const [submittedValue, setSubmittedValue] = useState("");

  return (
    <View style={styles.programContainer}>
      <Text style={styles.text}>Submitted Value: {submittedValue}</Text>
      <InputForm onSubmit={(value) => setSubmittedValue(value)} />
    </View>
  );
};

export default FormParent;
