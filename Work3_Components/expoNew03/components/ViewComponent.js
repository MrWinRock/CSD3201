import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/styles";

const ViewComponent = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerName}>
        Programmer: ปฏิวัฒน์ กฤษฏิ์สุภารัตน์
      </Text>
    </View>
  );
};

export default ViewComponent;
