import { View } from "react-native";
import styles from "../styles/styles";
import HeaderCard from "../components/HeaderCard";
import GreetingApp from "../components/docs/GreetingApp";
import UserCardApp from "../components/docs/UserCardApp";
import CounterApp from "../components/docs/CounterApp";
import DefaultPropsApp from "../components/docs/DefaultPropsApp";
import SpreadPropsApp from "../components/docs/SpreadPropsApp";
import StateToPropsParent from "../components/docs/StateToPropsParent";
import CallbackPropsParent from "../components/docs/CallbackPropsParent";
import FormParent from "../components/docs/FormParent";
import TimerApp from "../components/docs/TimerApp";
import TriangleAreaApp from "../components/docs/TriangleAreaApp";

const Docs = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.programs}>
          {/* Programs */}
          {/* <View style={styles.programCard}>
            <HeaderCard title="แบบค่าเดี่ยว (Primitive Props)" />
            <GreetingApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="แบบหลายค่า (Object Props)" />
            <UserCardApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="แบบฟังก์ชั่น (Callback Props)" />
            <CounterApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="แบบค่าเริ่มต้น (Default Props)" />
            <DefaultPropsApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="แบบกระจายค่า (Spread Props)" />
            <SpreadPropsApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="การส่งค่า State ไปยังคอมโพเนนต์ลูกผ่าน Props" />
            <StateToPropsParent />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="การส่ง Callback Function ผ่าน Props เพื่ออัปเดต State" />
            <CallbackPropsParent />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="การสร้างฟอร์มที่ส่งข้อมูลกลับไปยังคอมโพเนนต์แม่" />
            <FormParent />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="แอปพลิเคชัน: ตัวจับเวลา (Timer App)" />
            <TimerApp />
          </View> */}

          {/* <View style={styles.programCard}>
            <HeaderCard title="Triangle Area Calculator" />
            <TriangleAreaApp />
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default Docs;
