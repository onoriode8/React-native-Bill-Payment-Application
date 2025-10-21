import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";


interface ResetAppPasswordComponentProps {
    loading: boolean,
    serverResponse: string,
    oldAppPasswordVisible: boolean,
    resetAppPasswordHandler: () => void,
    setOldAppPasswordHandler: (pin: string) => void,
    setNewAppPasswordHandler: (pin: string) => void,
    setConfirmedAppPasswordHandler: (pin: string) => void
}

export default function ResetAppPasswordComponent(
    { oldAppPasswordVisible, loading, 
        resetAppPasswordHandler, serverResponse,
        setOldAppPasswordHandler, setNewAppPasswordHandler,
        setConfirmedAppPasswordHandler }: ResetAppPasswordComponentProps) {
            
    return (
        <SafeAreaView>
            <Spinner visible={loading} />
            <View style={style.container}>
                {serverResponse.length > 0 ? <Text style={{textAlign: "center"}}>{serverResponse}</Text>: null}
                <View>
                    {oldAppPasswordVisible && <TextInput placeholder="old App Password" 
                        onChangeText={setOldAppPasswordHandler} 
                        placeholderTextColor={ "#fff" }
                        style={style.textInputStyle} />}
                </View>

                <View>
                    <TextInput placeholder="new App Password" 
                        placeholderTextColor={ "#fff" }
                        onChangeText={setNewAppPasswordHandler} 
                        style={style.textInputStyle} />
                </View>
            
                <View>
                    <TextInput placeholder="confirm App Password" 
                        placeholderTextColor={ "#fff" }
                        onChangeText={setConfirmedAppPasswordHandler} 
                        style={style.textInputStyle} />
                </View>
                <TouchableOpacity onPress={resetAppPasswordHandler} style={style.resetPasswordStyle}>
                    <Text style={style.textStyle}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputStyle: {
        width: 350,
        height: 50,
        paddingLeft: 10,
        marginTop: Platform.OS === "ios" ? 15 : -50, //
        marginBottom: Platform.OS === "ios" ? 15 : 0, //
        borderRadius: 8,
        shadowOpacity: 0.1,
        backgroundColor: Platform.OS === "ios" ? "#fff" : "grey"
    },
    resetPasswordStyle: {
        width: 350,
        paddingTop: 15,
        height: 50,
        paddingLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "purple"
    },
    textStyle: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center"
    }
})