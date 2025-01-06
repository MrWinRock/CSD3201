import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../../styles/styles";

const CounterControls = ({ onIncrease, onDecrease }) => {
  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
    </View>
  );
};

const CallbackPropsParent = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.programContainer}>
      <Text style={styles.text}>Count: {count}</Text>
      <CounterControls
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1)}
      />
    </View>
  );
};

export default CallbackPropsParent;
