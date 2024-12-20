import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    headerContainer: {
        width: "100%",
        paddingTop: "12%",
        paddingBottom: "12%",
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
        borderColor: "#ddd",
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

export default styles;