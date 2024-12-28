import React, { useState } from "react";
import { TextInput, Text, ScrollView } from "react-native";
import styles from "../styles/styles";

const TextInputPage = () => {
  const [basicText, setBasicText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={basicText}
        onChangeText={setBasicText}
      />
      <Text style={styles.output}>You typed: {basicText}</Text>
      <Text style={styles.title}>Password TextInput Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Text style={styles.output}>Password length: {password.length}</Text>
      <Text style={styles.title}>Email TextInput Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text style={styles.output}>Email: {email}</Text>
      <Text style={styles.title}>Multiline TextInput Example</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Type your message here..."
        multiline={true}
        numberOfLines={4}
        onChangeText={setMessage}
      />
      <Text style={styles.output}>Message: {message}</Text>
    </ScrollView>
  );
};

export default TextInputPage;
