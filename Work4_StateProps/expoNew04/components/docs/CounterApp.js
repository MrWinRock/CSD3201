import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../../styles/styles";

const Counter = ({ onIncrease }) => {
  return <Button title="Increase" onPress={onIncrease} />;
};

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.programContainer}>
      <Text style={styles.text}>Count: {count}</Text>
      <Counter onIncrease={increaseCount} />
    </View>
  );
};

export default CounterApp;
