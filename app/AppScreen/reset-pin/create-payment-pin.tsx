import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Spinner from "react-native-loading-spinner-overlay"

import { useCreatePaymentPin } from '../../custom/create-payment-pin'
import BillQuickKeyboard from '../../util/BillQuick-keyboard/billQuick-numeric-keyboard'


export default function CreatePaymentPin() {
    const { loading, error, newPaymentPinMessage, handlePress, deleteLastNumber,
         sendPaymentPinHandler, newPaymentPin } = useCreatePaymentPin();

    return (
        <SafeAreaView>
            <Spinner visible={loading} />
            <View style={style.container}>
                <View style={style.pinBoxWrapper}>
                    <Text style={style.boxStyle}>{newPaymentPin[0]}</Text>
                    <Text style={style.boxStyle}>{newPaymentPin[1]}</Text>
                    <Text style={style.boxStyle}>{newPaymentPin[2]}</Text>
                    <Text style={style.boxStyle}>{newPaymentPin[3]}</Text>
                </View>
                {error.length > 0 ? <Text style={style.messageStyle}>{error}</Text> : null}
                {newPaymentPinMessage.length > 0 ? <Text 
                    style={style.messageStyle}>{newPaymentPinMessage}</Text>: null}
                <TouchableOpacity onPress={sendPaymentPinHandler} style={style.TouchableOpacityWrapper}>
                    <Text style={style.textStyle}>Create Pin</Text>
                </TouchableOpacity>
                <View>
                    <BillQuickKeyboard handlePress={handlePress} deleteLastNumber={deleteLastNumber} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 120,
        alignItems: "center",
    },
    pinBoxWrapper: {
        marginBottom: 100,
        alignItems: "center",
        flexDirection: "row",
    },
    boxStyle: {
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 40,
        shadowOpacity: 0.2,
        fontWeight: "700",
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 0 }
    },
    TouchableOpacityWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        width: "50%",
        borderRadius: 8,
        backgroundColor: "purple"
    },
    textStyle: {
        color: "#fff", 
        fontWeight: "700", 
        textAlign: "center"
    },
    messageStyle: {
        color: "red",
        width: "100%",
        fontWeight: "300",
        // borderRadius: 8,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 15,
        backgroundColor: "#1124"
    }
})