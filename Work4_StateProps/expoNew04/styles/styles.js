import { StyleSheet } from "react-native";

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
    elevation1: 3,
  },
  programContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
  },
  timer: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: "#333",
  },
  programContainerDark: {
    width: "100%",
    padding: 10,
    backgroundColor: "#333",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  textDark: {
    fontSize: 20,
    marginBottom: 10,
    color: "#fff",
  },
  weatherCard: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    alignItems: "center",
  },
  textCity: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textTemp: {
    fontSize: 18,
    color: "#48b0a8",
  },
});

export default styles;
