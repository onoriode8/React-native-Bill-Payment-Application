import axios from 'axios';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { ActivityIndicator, Platform, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthContext from '../hooks/context';



export default function VerifyCode() {
    const [code, setCode] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [verified, setVerified] = useState<string>("")

    const { userPersonalData } = useContext(AuthContext);

    const message = `We've sent a verification code to your email ${userPersonalData.email}`;

    const verifyCodeHandler = async () => {
        console.log("hello")
        if(code.length !== 6 && userPersonalData.userId.length < 24) return
        setLoading(true)
        try {
            const serverMessage: string = await axios.post(`http://localhost:7070/user/verify/email/otp/${userPersonalData.userId}`, {
                code: Number(code)
            }, {
                headers: {
                    "Authorization": "Bearer " + userPersonalData.token
                }
            })
            console.log("message after verified", serverMessage)
            setLoading(false)
            setVerified(serverMessage)
            setTimeout(() => {
                router.replace("/dashboard/dashboard")
            }, 3000)
        } catch(err) {
            setLoading(false)
            console.log(err)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.verifiedEmailText}>{verified} Email verified successfully, Login to use the app.</Text>
            <View style={styles.container}>
                <Text style={{fontSize: 18, fontWeight: "900", color: "purple"}}>Verify Your Email</Text>
                <View>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View>
                    <KeyboardAvoidingView style={styles.keyboardAvoidViewInput}>
                        <TextInput placeholder='Enter verification code'
                            keyboardType='number-pad' 
                            onChangeText={(code) => setCode(code)}/>
                    </KeyboardAvoidingView>
                    <TouchableOpacity>
                        <View style={styles.touchableOpacityTextWrapper}>
                            <Text style={{color: "purple"}}>other</Text>
                            <Text onPress={verifyCodeHandler} style={styles.verifyEmail}>Verify Email</Text>
                            {!loading && <Text style={{color: "purple"}}>other</Text>}
                            {loading && <ActivityIndicator size="small" color="#eee" />}
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.back} onPress={() => router.back()}>Back to Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    verifiedEmailText: {
        fontWeight: "900",
        marginTop: 40,
        color: "#fff",
        padding: 10, 
        // elevation: 5,
        shadowColor: "#000",
        // shadowOpacity: 0.2,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        backgroundColor: "rgba(4, 228, 105, 0.7)"
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