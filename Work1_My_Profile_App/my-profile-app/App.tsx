import { Text, View, Image, ImageBackground } from "react-native";
import ContentInfo from "./components/ContentInfo";
import info from "./data/info";
import styles from "./style/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerContainer}
        source={require("./assets/bg.png")}
      >
        <View style={styles.header}>
          <Image style={styles.image} source={require("./assets/iwin.jpg")} />
          <Text style={styles.name}>Pharthiwath G.</Text>
          <Text style={styles.headerInfo}>Computer Science</Text>
          <Text style={styles.headerInfo}>Bangkok, Thailand</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <ContentInfo infos={info} />
      </View>


    </View>
  );
}
