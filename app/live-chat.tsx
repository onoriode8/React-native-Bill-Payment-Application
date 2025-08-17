import { useState } from 'react';
import axios from 'axios';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Platform } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function LiveChat() {
    const [message, setMessage] = useState<string>("")

    const sendMessageHandler = async() => {
        try {
            const response = await axios.post("http://localhost:7070/send/message/support", {
                message
            })
            console.log("RES FROM LIVE-CHAT",response)
            if(response) {
                throw new Error("Error")
            }
        } catch(err: any) {
            console.log("ERROR", err)
        }
    }

    return (
        <SafeAreaView style={styles.container}> 
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.messageText}>
                    <Text>Hello User</Text>
                    <Text>How can we help...</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.message}
                        onChangeText={(text) => setMessage(text)}
                        placeholder='Type a message...' defaultValue='' />
                    <Ionicons name="send-sharp" size={20} 
                        color="#fff" style={styles.send} 
                        onPress={sendMessageHandler} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messageText: {
        flex: 1,
        marginLeft: 25,
        marginTop: 10,
        alignItems: "flex-start"
    },
    inputWrapper: {
        // margin: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",

        // position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        backgroundColor: "rgba(8, 1, 16, 0.77)",
        marginBottom: 0, //check for android screen.
        padding: 10,
        paddingTop: 20,
        paddingBottom: 50,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    message: {
        padding: 10,
        outline: "none",
        // borderWidth: 1,
        borderRadius: 15,
        marginRight: 5,
        width: Platform.OS === "ios" ? 360 : 300,
        marginTop: 5,
        color: Platform.OS === "ios" ? "#fff" : "#fff",
        // borderColor: "#ccc",
        // backgroundColor: "#fff"
    },
    send: {
        // borderWidth: 0.3,
        paddingRight: 5,
        paddingLeft: 7,
        paddingTop: 6,
        paddingBottom: 6,
        marginRight: 5,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "purple"
    }
})