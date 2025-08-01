import { View, Text, StyleSheet } from "react-native";


interface ErrorProps {
    clicked: () => void
}

const error: React.FC<ErrorProps> = ({ clicked }) => (
    <View style={styles.view}>
        <Text style={styles.text}>User already exist {}</Text>
        <Text style={styles.textOk} onPress={clicked}>Ok</Text>
    </View>
)

export default error;


const styles = StyleSheet.create({
    view: {
        zIndex: 3,
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
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
    },
    textOk: {
        color: "#fff",
        marginTop: 10,
        borderColor: "none",
        borderWidth: 0.3,
        padding: 5,
        borderRadius: 6,
        backgroundColor: "purple"
    }
})