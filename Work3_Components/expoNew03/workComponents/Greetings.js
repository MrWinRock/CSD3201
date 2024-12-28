import React, { useState } from "react";
import { TextInput, Text, View, Pressable, Alert } from "react-native";
import workStyles from "../styles/workStyles";

const Greetings = () => {
  const [name, setName] = useState("");

  const handleName = () => {
    Alert.alert("Alert", `Welcome, ${name}!`);
  };

  return (
    <View style={workStyles.programContainer}>
      <Text style={workStyles.t}>Enter Your Name:</Text>
      <TextInput
        style={workStyles.input}
        placeholder="Type here..."
        value={name}
        onChangeText={setName}
      />
      <Pressable style={workStyles.button} onPress={handleName}>
        <Text style={workStyles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default Greetings;
