import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

const UserCard = ({ name, age }) => {
  return (
    <View>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};

const SpreadPropsApp = () => {
  const userInfo = { name: "John", age: 41 };

  return (
    <View style={styles.programContainer}>
      <UserCard {...userInfo} />
    </View>
  );
};

export default SpreadPropsApp;
