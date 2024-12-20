import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

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
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Date of Birth: </Text>
          <Text style={styles.textInfo}>13 January 2004</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Blood Type: </Text>
          <Text style={styles.textInfo}>AB</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Nationality: </Text>
          <Text style={styles.textInfo}>Thai</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Education: </Text>
          <Text style={styles.textInfo}>SSRU, CS</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Address: </Text>
          <Text style={styles.textInfo}>Bangkok, Thailand</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Phone: </Text>
          <Text style={styles.textInfo}>062-594-1598</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Talent: </Text>
          <Text style={styles.textInfo}>Gaming, Coding</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfoBold}>Hobbie: </Text>
          <Text style={styles.textInfo}>Gaming</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerContainer: {
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "10%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  image: {
    width: 148,
    height: 148,
    borderRadius: 100,
    margin: "auto",
  },

  name: {
    width: "100%",
    marginTop: "4%",
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
  },
  
  headerInfo: {
    width: "100%",
    fontSize: 18,
    fontWeight: 400,
    textAlign: "center",
    paddingTop: 5,
    color: "#444",
  },

  // content

  content: {
    display: "flex",
    margin: 16,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  info: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
  },

  textInfoBold: {
    fontSize: 18,
    fontWeight: 700
  },
  
  textInfo: {
    fontSize: 18,
    fontWeight: 400
  }
});
