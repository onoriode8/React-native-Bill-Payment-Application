import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";


interface ResetPinProps {
    error: string,
    allowed: boolean,
    loading: boolean,
    oldPaymentPin: string, 
    newPaymentPin: string, 
    confirmedPaymentPin: string, 
    resetPinHandler: () => void,
    oldPaymentPinMessage: string,
    newPaymentPinMessage: string,
    setOldPaymentPin: (pin: string) => void, 
    setNewPaymentPin: (pin: string) => void, 
    setConfirmedPaymentPin: (pin: string) => void,
}

export default function ResetPin(
    { 
        error, allowed, loading, oldPaymentPin, 
        setOldPaymentPin, setNewPaymentPin, 
        newPaymentPin, confirmedPaymentPin, setConfirmedPaymentPin,
        resetPinHandler, oldPaymentPinMessage,
        newPaymentPinMessage 
    }: ResetPinProps) {
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                    <View>
                        {oldPaymentPinMessage.length > 0 ? <Text style={style.pinMessage}>{oldPaymentPinMessage}</Text> : null}
                        {newPaymentPinMessage.length > 0 ? <Text style={style.pinMessage}>{newPaymentPinMessage}</Text>: null}
                        {error.length > 0 ? <Text style={[style.pinMessage, { color: "red" }]}>{error}</Text> : null}
                    </View>
                    <View style={{marginTop: 50}}>
                        <Spinner visible={loading} />
                        <View style={style.keyboardWrapper}>
                           {allowed && <TextInput placeholder="Old Payment Pin" keyboardType="number-pad"
                               placeholderTextColor={ "grey" }
                               value={oldPaymentPin} style={style.keyboardStyle}
                               onChangeText={setOldPaymentPin} />}
                           <TextInput placeholder="New Payment Pin" keyboardType="number-pad"
                               placeholderTextColor={ "grey" }
                               value={newPaymentPin} style={style.keyboardStyle}
                               onChangeText={setNewPaymentPin} />
                           <TextInput placeholder="Confirm Payment Pin" keyboardType="number-pad"
                               placeholderTextColor={ "grey" }
                               value={confirmedPaymentPin} style={style.keyboardStyle}
                               onChangeText={setConfirmedPaymentPin} />
                            <TouchableOpacity style={style.proceedButton} onPress={resetPinHandler}>
                                <Text style={style.text}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    pinMessage: {
        fontWeight: "400",
        color: "#fff",
        // width: "100%",
        paddingLeft: 15,
        paddingTop: 4,
        paddingBottom: 4,
        // marginBottom: 20,
        backgroundColor: "#1134"
    },
    keyboardWrapper: {
        alignItems: "center",
        // flexDirection: "column",
        // justifyContent: "center"
    },
    keyboardStyle: {
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginBottom: 25,
        width: 350,
        fontWeight: "800",
        backgroundColor: "#fff"
    },
    proceedButton: {
        paddingTop: 20,
        paddingBottom: 20,
        // marginTop: 70,
        width: 300,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "purple"
    },
    text: {
        textAlign: "center",
        fontWeight: "800",
        fontSize: 15,
        color: "#fff",
    }
})