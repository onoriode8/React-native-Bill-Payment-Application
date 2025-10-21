import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Platform } from 'react-native'

import BillQuickNumericKeyboard from '../../util/BillQuick-keyboard/billQuick-numeric-keyboard'
import useTwoFactorAuthenticator from '../../custom/two-factor-authenticator'

import QRCODE from '../../../assets/images/qrCode.png'


export default function TwoFactorAuthenticator() {
    const { googleAuthCode, onChangeSetGoogleAuthCode } = useTwoFactorAuthenticator()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{alignItems: "center"}}>
                    <Image source={QRCODE} />
                    <Text style={{marginTop: 10}}>Secret Code</Text>
                    <View style={styles.secretCodeWrapper}>
                        <Text style={{ marginRight: 10 }}>{} LONG STRING</Text>
                        <Text>Copy</Text>
                    </View>
                </View>
                {/* <View style={styles.rule}>
                    <Text style={styles.textStyle}>NOTE:</Text>
                    <Text style={styles.textStyle}>To Set Your 2FA Security. Open Google Authentication App, and Scan The QrCode above.</Text>
                    <Text style={styles.textStyle}>Enter the Generated Code From Google Authenticator App.</Text>
                </View> */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputBox}>{}</Text>
                    <Text style={styles.inputBox}>{}</Text>
                    <Text style={styles.inputBox}>{}</Text>
                    <Text style={styles.inputBox}>{}</Text>
                    <Text style={styles.inputBox}>{}</Text>
                    <Text style={styles.inputBox}>{}</Text>
                </View>
            </View>
            <BillQuickNumericKeyboard 
                handlePress={onChangeSetGoogleAuthCode}
                deleteLastNumber={() => {}} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    secretCodeWrapper: {
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 20, 
        marginBottom: 10
    },
    // rule: {
    //     padding: 5,
    //     marginTop: 40,
    //     marginLeft: 5,
    //     marginRight: 5,
    //     borderRadius: 5,
    //     flexWrap: "wrap",
    //     flexDirection: "row",
    //     backgroundColor: "#ccc"
    // },
    // textStyle: {
    //     fontSize: 9,
    //     fontWeight: "400"
    // },
    inputWrapper: {
        marginTop: Platform.OS === "android" ? 10 : 10, //check for ios, because I already did for android
        marginBottom: Platform.OS === "android" ? -10 : -10, //check for ios, because I already did for android
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    inputBox: {
        borderRadius: 5,
        paddingTop: 15,
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 15,
        marginRight: 10,
        marginLeft: 10,
        shadowOpacity: 0.2,
        shadowColor: "#fff",
        backgroundColor: "#fff",
        shadowOffset: { width: 0, length: 0}
    }
})