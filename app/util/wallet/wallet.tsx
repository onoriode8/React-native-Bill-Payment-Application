import { useContext } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import ContextData from '../../hooks/context';


export default function Wallet() {
    const { userPersonalData } = useContext(ContextData)
    return (
        <View style={styles.walletContainer}>
            <View style={styles.totalBalanceWrapper}>
                <Text style={styles.text}>Total Balance </Text>
                <Text style={styles.text}>₦{userPersonalData.totalBalance === 0 ?
                    "0.00" : userPersonalData.totalBalance}</Text>
            </View>
            <Text style={{color: "purple", fontWeight: "800"}}>✓</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    walletContainer: {
        borderRadius: 15,
        paddingRight: 8,
        alignItems: "center", 
        flexDirection: "row",
        backgroundColor: "#eee", 
        justifyContent: "space-between",
        marginTop: Platform.OS === "ios" ? 30 : 15,
    },
    text: {
        fontSize: 14,
        fontWeight: "600"
    },
    totalBalanceWrapper: {
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        alignItems: "center", 
        flexDirection: "row",
    }
})