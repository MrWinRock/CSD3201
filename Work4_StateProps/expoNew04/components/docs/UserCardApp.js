import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

const UserCard = ({ user }) => {
  return (
    <View>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>
    </View>
  );
};

const UserCardApp = () => {
  const userInfo = { name: "Anucha", age: 28 };

  return (
    <View style={styles.programContainer}>
      <UserCard user={userInfo} />
    </View>
  );
};

export default UserCardApp;
