import axios from 'axios';
// import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import { PROD_API_URL } from '../../config';
import AuthContext from '../../hooks/context';
import AppLogo from '../logo/app-logo';


export default function VerifyCode() {
    const [code, setCode] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [verified, setVerified] = useState<string>("")
    const [error, setError] = useState<string>("")

    const navigation = useNavigation<any>()

    const { userPersonalData } = useContext(AuthContext);

    const message = `We've sent a verification code to your email ${userPersonalData.email}`;
    
    const verifyCodeHandler = async () => {
        navigation.navigate("dashboard") //remove later 
        if(code.length !== 6 && userPersonalData.userId.length < 24) return
        setLoading(true)
        try {
            const serverMessage: string = await axios.post(`${PROD_API_URL}/user/verify/email/otp/${userPersonalData.userId}`, {
                otpCode: code
            }, {
                headers: {
                    "Authorization": "Bearer " + userPersonalData.token
                }
            })
            console.log("REsponse first", serverMessage.data)

            // if(serverMessage.status !== 200) { 
            //     throw Error(serverMessage.data)
            // }
            setLoading(false)
            setVerified(serverMessage.data)
            setTimeout(() => {
                navigation.navigate("dashboard")
            }, 200)
        } catch(err) {
            setLoading(false)
            setError(err.response.data)
            setTimeout(() => {
                setError("");
            }, 2000)
            console.log("Error from verifyEmail", err.response.data)

        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}> 
                        {verified.length === 0 ? null : <Text style={styles.verifiedEmailText}>{verified}</Text>}  
                        {error.length === 0 ? null : <Text style={styles.error}>{error}</Text>}
                        <AppLogo />
                        <Text style={{fontSize: 18, fontWeight: "900", color: "purple"}}>Verify Your Email</Text>
                        <View>
                            <Text style={styles.message}>{message}</Text>
                        </View>
                        <View>
                            <View style={styles.keyboardAvoidViewInput}>
                                <TextInput placeholder='Enter verification code'
                                    keyboardType='number-pad' 
                                    onChangeText={(code) => setCode(code)}
                                />
                            </View>
                            <TouchableOpacity onPress={verifyCodeHandler}>
                                <View style={styles.touchableOpacityTextWrapper}>
                                    <Text style={{color: "purple"}}>other</Text>
                                    <Text onPress={verifyCodeHandler} style={styles.verifyEmail}>Verify Email</Text>
                                    {!loading && <Text style={{color: "purple"}}>other</Text>}
                                    {loading && <ActivityIndicator size="small" color="#eee" />}
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.back} onPress={() => navigation.navigate("login")}>Back to Sign Up</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        // </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? -50 : -40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    verifiedEmailText: {
        fontWeight: "900",
        marginTop: 40,
        color: "#fff",
        padding: 10, 
        textAlign: "center",
        // elevation: 5,
        shadowColor: "#000",
        // shadowOpacity: 0.2,
        borderRadius: 10,
        // shadowOffset: { width: 0, height: 3 },
        backgroundColor: "rgba(4, 228, 105, 0.7)"
    },
    error: {
        color: "red", 
        fontSize: 10,
        marginTop: 5,
        fontWeight: "900",
        textAlign: "center"
    },
    message: {
        textAlign: "center",
        paddingTop: 20,
        fontSize: 15
    },
    keyboardAvoidViewInput: {
        paddingTop: Platform.OS === "ios" ? 18 : 9,
        paddingBottom: Platform.OS === "ios" ? 18 : 9,
        paddingRight: Platform.OS === "ios" ? 100 : 75,
        paddingLeft: Platform.OS === "ios" ? 100 : 75,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: "#eee"
    },
    touchableOpacityTextWrapper: {
        paddingTop: 18,
        paddingRight: Platform.OS === "ios" ? 10 : 5,
        paddingBottom: 18,
        borderRadius: 15,
        backgroundColor: "purple",
        flexDirection: "row", 
        justifyContent: "space-between"
    }, 
    verifyEmail: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center"
    },
    back: {
        textAlign: "center",
        marginTop: 25,
        fontWeight: "800",
        color: "purple"
    }
})