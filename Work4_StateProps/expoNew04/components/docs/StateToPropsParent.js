import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../../styles/styles";

const CounterDisplay = ({ count }) => {
  return <Text style={styles.text}>Current Count: {count}</Text>;
};

const StateToPropsParent = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.programContainer}>
      <CounterDisplay count={count} />
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default StateToPropsParent;
