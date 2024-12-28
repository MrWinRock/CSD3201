import React, { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import workStyles from "../styles/workStyles";

const InputDisplay = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = () => {
    setMessage(input);
  };

  return (
    <View style={workStyles.programContainer}>
      <TextInput
        style={workStyles.input}
        placeholder="Type here..."
        value={input}
        onChangeText={setInput}
      />
      <Pressable style={workStyles.button} onPress={handleMessage}>
        <Text style={workStyles.buttonText}>Submit</Text>
      </Pressable>

      {message ? (
        <Text style={workStyles.text}>You typed: {message}</Text>
      ) : null}
    </View>
  );
};

export default InputDisplay;
