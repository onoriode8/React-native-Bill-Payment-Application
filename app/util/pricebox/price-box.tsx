import { SafeAreaView, Text, View, StyleSheet } from "react-native";


export default function PriceBox({ price, click }) {
    return (
        <SafeAreaView>
            <View style={styles.priceBoxWrapper} onPress={click}>
                <Text style={styles.naira}>₦{price}</Text>
                <Text>pay ₦{price}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    priceBoxWrapper: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "rgba(154, 205, 236, 0.2)"
    },
    naira: {
        color: "purple",
        fontWeight: "900"
    }
})