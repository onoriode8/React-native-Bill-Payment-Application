import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View, Platform, SafeAreaView } from "react-native";


import Backdrop from "../backdrop/backdrop";
import Wallet from "../wallet/wallet";
import PaymentPinOverLay from './payment-pin-overlay'


interface BottomOverLayProps {
    amount: number,
    bonus: number, //cashback Bonus to Earn
    number: number,
    networkType: string,
    network: string,
    networkLogo: string,
    recharge: string,
    closeBottomOverLay: () => {}
}

export default function BottomOverLay({amount, bonus, networkType, recharge,
    networkLogo, network, number, closeBottomOverLay}: BottomOverLayProps) {

    const [openPaymentPin, setOpenPaymentPin] = useState<boolean>(false);

    return(
        <View>
            <Backdrop />
            <View style={styles.containerView}>
                <View style={styles.viewWrapper}>
                    <Ionicons name="close-outline" size={25} color="black" onPress={closeBottomOverLay} />
                    <Text></Text>
                </View>
                <Text style={styles.amountEntered}>₦{amount}</Text> {/* convert to toString() to have #1,000*/}
                <View style={styles.dataWrapper}>
                    <View style={styles.mainViewWrapper}>
                        <Text style={styles.text}>Type</Text>
                        <View style={{alignItems: "center", flexDirection: "row"}}>
                            <Text style={styles.text}>{network} {networkLogo} </Text>
                            <Text style={styles.text}>{networkType}</Text>
                        </View>
                    </View>
                    <View style={styles.mainViewWrapper}>
                        <Text style={styles.text}>Recipient Number</Text>
                        <Text style={styles.text}>{number}</Text>
                    </View>
                    <View style={styles.mainViewWrapper}>
                        <Text style={styles.text}>Bonus</Text>
                        <Text style={{color: "green"}}>+₦{bonus} Cashback</Text>
                    </View>
                    <View style={styles.mainViewWrapper}>
                        <Text style={styles.text}>Payment method</Text>
                        <Text style={styles.text}>Total Balance</Text>
                    </View>
                </View>
                <Wallet /> {/* wallet here */}
                <TouchableOpacity style={styles.touchableOpacityWrapper} onPress={() => setOpenPaymentPin(true)}>
                    <Text style={styles.rechargeText}>{recharge}</Text>
                </TouchableOpacity>
            </View>
            {/* {openPaymentPin && <Backdrop />} */}
            {openPaymentPin && <PaymentPinOverLay />}
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        zIndex: 6,
        top: 0,
        right: 0,
        left: 0,
        // flex: 1,
        // justifyContent: "center",
        padding: 10,
        paddingTop: 0,
        position: "absolute",
        marginTop: Platform.OS === "ios" ? 250 : 150, 
        paddingBottom: 300, //Platform.OS === "ios" ? 300 : 
        backgroundColor: "#fff"
    },
    viewWrapper: {
        paddingTop: 20,
        paddingBottom: 10, //Platform.OS === "ios" ? 10 : 
        alignItems: "center", 
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "500",
    },
    amountEntered: {
        fontSize: 23,
        marginBottom: 20,
        textAlign: "center", 
        fontWeight: "700" 
    },
    dataWrapper: {

    },
    mainViewWrapper: {
        marginTop: 18,
        alignItems: "center", 
         flexDirection: "row",
        justifyContent: "space-between",
    },

    touchableOpacityWrapper: {
        marginTop: Platform.OS === "ios" ? 50 : 20, 
        marginBottom: 20,
        paddingTop: 18,
        paddingBottom: 18,
        borderRadius: 10,
        backgroundColor: "purple"
    },
    rechargeText: {
        textAlign: "center", 
        color: "#fff", 
        fontWeight: "900"
    }
})