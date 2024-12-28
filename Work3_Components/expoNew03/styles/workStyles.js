import { StyleSheet } from "react-native";

const workStyles = StyleSheet.create({
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
    elevation: 3,
  },
  programContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  button: {
    width: "90%",
    padding: 10,
    backgroundColor: "#2196f3",
    color: "#fff",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  productCard: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: "#2cb92f",
  },
  text: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default workStyles;
