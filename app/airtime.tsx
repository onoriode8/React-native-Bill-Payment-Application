import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import InputContainer from './util/input/input-container';
import PriceBox from './util/pricebox/price-box';
import BottomOverLay from "./util/overlay/bottom-overlay";


export default function Airtime() {
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)

    const [showNetwork, setShowNetwork] = useState<boolean>(false)
    const [showPhoneNumberList, setShowPhoneNumberList] = useState<boolean>(false)

    const [networkSelected, setNetworkSelected] = useState("") //add logic later to select network type

    useEffect(() => {
        if(phoneNumber.length === 11) return
        console.log(phoneNumber)
    }, [phoneNumber]);

    const data = [
        { price: 50 },
        { price: 100 },
        { price: 200 },
        { price: 250 },
        { price: 300 },
        { price: 500 },
        { price: 1000 },
        { price: 2000 },
        { price: 3000 },
    ];

    const fiftynairaHandler = () => {
        console.log("b") //continue from here
        setAmount(50)
    }

    const rechargeCheckHandler = () => {
        //check for balance before continuing
        console.log("working")
        if(Number(amount) < 50) return;
    }

    const processHandler = () => {
        if(Number(amount) < 50 && phoneNumber.length === 11) return;

    }


    return (
        <SafeAreaView>
            <InputContainer show={showNetwork}
                click={() => setShowNetwork(prev => !prev)}
                change={(nu: string) => setPhoneNumber(nu)} numb={phoneNumber}
                showNumberList={showPhoneNumberList}
                setShowNumberList={() => setShowPhoneNumberList(prev => !prev)}
            />
            <View style={styles.topupwrapper}>
                <Text style={styles.topup}>Top up</Text>
                <View style={styles.priceBox}>
                    {data.map((i, index) => <PriceBox 
                        key={index} price={i.price} click={fiftynairaHandler} />)}
                </View>

                <View style={styles.enterData}>
                    <View style={styles.nairaWrapper}>
                        <Text style={styles.naira}>₦</Text>
                        <TextInput style={{fontWeight: "900"}} 
                            placeholderTextColor="#d3ceceff" 
                            onChangeText={(amou) => setAmount(Number(amou))}
                            placeholder="50 - 100,000" keyboardType="number-pad" />
                    </View>
                    <Text style={styles.buyText} onPress={rechargeCheckHandler}>Buy {amount}</Text>
                </View>
            </View>
            <BottomOverLay 
                amount={amount} 
                bonus={0} //cashback Bonus to Earn in number
                number={Number(phoneNumber)} 
                networkType="Airtime"
                network={networkSelected} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topupwrapper: {
        marginTop: 100, // change from 15 to 110 on ios. check on other device like android.
        padding: 20,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 10,
        position: "absolute",
        zIndex: 4,
        backgroundColor: "#fff"
    },
    topup: {
        marginLeft: 8,
        paddingBottom: 10,
        borderBottomWidth: 0.3
    },
    priceBox: {
        paddingTop: 10,
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    enterData: {
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nairaWrapper: {
        alignItems: "center",
        flexDirection: "row",
    },
    naira: {
        fontSize: 20, 
        fontWeight: "700", 
        marginRight: 5
    },
    buyText: {
        fontWeight: "700",
        color: "#fff",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "rgba(173, 4, 225, 0.58)"
    }
})