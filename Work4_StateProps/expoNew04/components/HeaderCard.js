import { View, Text } from "react-native";
import styles from "../styles/styles";

const HeaderCard = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerName}>
        Programmer: ปฏิวัฒน์ กฤษฏิ์สุภารัตน์
      </Text>
    </View>
  );
};

export default HeaderCard;
