import { View } from "react-native";
import styles from "../styles/styles";
import HeaderCard from "../components/HeaderCard";
import ToggleLight from "../components/works/ToggleLight";
import WeatherDisplay from "../components/works/WeatherDisplay";
import BMICalculator from "../components/works/BMICalculator";

const Works = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.programs}>
          {/* Programs */}
          {/* <View style={styles.programCard}>
            <HeaderCard title="Toggle Light App (เปิด-ปิดไฟ)" />
            <ToggleLight />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="Weather Display App (แสดงสภาพอากาศ)" />
            <WeatherDisplay />
          </View> */}

          <View style={styles.programCard}>
            <HeaderCard title="BMI Calculator (คำนวณดัชนีมวลกาย)" />
            <BMICalculator />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Works;
