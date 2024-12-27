import { StyleSheet, TextComponent } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    padding: 20,
    width: "100%",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  headerName: {
    fontSize: 16,
    color: "#666",
  },
  programs: {
    width: "90%",
    marginVertical: 20,
  },
  programCard: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 20,
  },
  programTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  card: {
    width: "80%",
    padding: 20,
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  simpleMessageContainer: {
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  simpleMessage: {
    fontSize: 20,
    color: "#222",
    marginBottom: 10,
  },
  flexBoxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#add8e6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  nestedViewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    width: 200,
    height: 200,
    backgroundColor: "#ffb6c1",
    justifyContent: "space-between",
    alignItems: "center",
  },
  child: {
    width: 80,
    height: 80,
    backgroundColor: "#add8e6",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollableViewContainer: {
    height: 300,
    width: "100%",
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  TextComponent: {
    fontSize: 20,
    color: "#222",
  },
  imageContainer: {
    padding: 20,
    width: "100%",
    margin: "auto",
    alignItems: "center",
  },
  imageBackground: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  imageText: {
    fontSize: 18,
    color: "#222",
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
  },
});

export default styles;
