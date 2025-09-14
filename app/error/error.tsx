import { View, Text, StyleSheet } from "react-native";


interface ErrorProps {
    error: string,
    clicked: () => void
}

const error: React.FC<ErrorProps> = ({ error, clicked }) => (
    <View style={styles.view}>
        <Text style={styles.text}>{error}</Text>
        <Text style={styles.textOk} onPress={clicked}>Ok</Text>
    </View>
)

export default error;


const styles = StyleSheet.create({
    view: {
        // flex: 1,
        zIndex: 6,
        padding: 20,
        borderRadius: 10,
        position: "fixed",
        borderColor: "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    text: {
        color: "black",
        textAlign: "center",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
    },
    textOk: {
        color: "#fff",
        marginTop: 10,
        borderColor: "none",
        borderWidth: 0.3,
        padding: 12,
        borderRadius: 6,
        backgroundColor: "purple"
    }
})