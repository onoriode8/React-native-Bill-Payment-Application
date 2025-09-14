import axios from "axios";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";


export default function Notification() {
    const [transactionMessage, setTransactionMessage] = useState<[]>([])

    useEffect(() => {
        if(transactionMessage.length !== 0) return
        const fetchTransactionData = async () => {
            try{
                const response = await axios.get("http://localhost:7070/get/transactions", {
                    headers: {
                        "Authorization": "Bearer " + "token"
                    }
                })
                console.log("RESP", response)
                setTransactionMessage(response)
            } catch(err) {
                console.log("ERROR FROM NOTIFICATION", err)
            }
        }
        fetchTransactionData()
    }, [transactionMessage])

    return (
        <ScrollView>
            <View style={styles.transaction}>
                <View style={styles.transactionWrapper}>
                    <Text style={styles.transactionText}>Incoming Transfer Successful or withdraw to</Text> {/*will be coming from server/DB */}
                    <Text>depositer {} has sent you ₦{} </Text>
                </View>
                <View style={styles.timeWrapper}>
                    <Text style={styles.time}>{} 2025-08-17 {} 11:40 PM OR AM</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    transaction: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    transactionWrapper: {
        borderBottomWidth: 0.3,
        paddingBottom: 10
    },
    transactionText: {
        fontWeight: Platform.OS === "android" ? "bold" : "500",
        fontSize: 15
    },
    timeWrapper: {
        marginTop: 10
    },
    time: {
        fontSize: 11
    }
})