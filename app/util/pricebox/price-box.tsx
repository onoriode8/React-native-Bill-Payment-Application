import { SafeAreaView, Text, View, StyleSheet } from "react-native";


interface PriceBoxProps {
    price: number,
    click: () => void
}

export default function PriceBox({ price, click }: PriceBoxProps) {
    return (
        <SafeAreaView>
            <View style={styles.priceBoxWrapper}>
                <Text style={styles.naira} onPress={click}>₦{price}</Text>
                <Text onPress={click}>pay ₦{price}</Text>
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