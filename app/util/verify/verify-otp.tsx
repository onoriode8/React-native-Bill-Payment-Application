import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";


interface VerifyOTPprops {
    titleMessage: string,
    switchInstead: string,
    selectedNumber: number[],
    error: string,
    switchPath: string,
    loading: boolean,
    contact: string,
    clicked: () => void,
    resendOtpHandler: () => void
}

export default function VerifyOTP(
    { titleMessage, switchInstead, contact, switchPath, clicked,
        selectedNumber, error, loading, resendOtpHandler }: VerifyOTPprops) {
    const message = `Didn't receive the OTP ?`

    return (
        <SafeAreaView>
            <View>
                <View>
                    <View style={style.otpWrapper}>
                        <Text>{titleMessage}</Text>
                        <Text>{contact}</Text>
                    </View>
                    <View style={style.keyLogoWrapper}>
                        <Text>One-Time-Password (OTP)</Text>
                        <FontAwesome name="lock" size={60} color="orange" />
                    </View>
                </View>
                <View style={style.pinBoxWrapper}>
                    <Text style={style.textBox}>{selectedNumber[0]}</Text>
                    <Text style={style.textBox}>{selectedNumber[1]}</Text>
                    <Text style={style.textBox}>{selectedNumber[2]}</Text>
                    <Text style={style.textBox}>{selectedNumber[3]}</Text>
                    <Text style={style.textBox}>{selectedNumber[4]}</Text>
                    <Text style={style.textBox}>{selectedNumber[5]}</Text>
                </View> 
                <Spinner visible={loading} />
                {error.length > 0 ? <Text style={style.errorText}>{error}</Text> : null}
                <View style={[ style.keyLogoWrapper, { marginTop: 20 } ]}>
                    <Text>{message}</Text>
                    <TouchableOpacity style={style.resendButton} >
                        <Text style={{color: "#fff", fontWeight: "300"}} 
                            onPress={resendOtpHandler}>Resend</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={clicked}>
                    <Text style={{color: "purple", marginTop: 50,
                         paddingLeft: 10}}>{switchInstead}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    otpWrapper: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        alignItems: "flex-start",
        backgroundColor: "#ccc",
    },
    keyLogoWrapper: {
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    pinBoxWrapper: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center"
    },
    textBox: {
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        marginRight: 8,
        marginLeft: 8,
        // fontSize: 15,
        fontWeight: "900",
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    resendButton: {
        padding: 12,
        borderRadius: 20,
        backgroundColor: "purple"
    },
    errorText: {
        color: "red", 
        fontSize: 10, 
        fontWeight: "600", 
        paddingLeft: 30
    }
})