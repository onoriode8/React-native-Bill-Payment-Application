import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import Context from '../../hooks/context';


export default function Settings() {
    const [LoginWithFaceId, setLoginWithFaceId] = useState<boolean>(false)
    const [enableBiometric, setEnableBiometric] = useState<boolean>(false)
    const [enable2FA, setEnable2FA] = useState<boolean>(false)

    const {} = useContext(Context) //get isMFA value if set up or not, like true or false from server.
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView>
            <View style={style.container}>
                <TouchableOpacity style={style.wrapper} onPress={() => navigation.navigate("verify-pin")}>
                    <Text style={style.textStyle}>Change Payment PIN</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper} onPress={() => navigation.navigate("verify-phone-number")}>
                    <Text style={style.textStyle}>Forgot Payment PIN</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper} onPress={() => navigation.navigate()}>
                    <Text style={style.textStyle}>Change App Password</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper} onPress={() => navigation.navigate()}>
                    <Text style={style.textStyle}>Forgot App Password</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper}>
                    <Text style={style.textStyle}>Set Biometric</Text>
                    <Switch value={enableBiometric} 
                        onValueChange={() => setEnableBiometric(true)} />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper}>
                    <Text style={style.textStyle}>Login with Face ID</Text>
                    <Switch value={LoginWithFaceId} onValueChange={() => setLoginWithFaceId(true)} />
                </TouchableOpacity>
                <TouchableOpacity style={style.wrapper}>
                    <Text style={style.textStyle}>Two Factor Authentication (2FA) </Text>
                    <Switch value={enable2FA} 
                        onValueChange={() => setEnable2FA(true)} /> {/* boolean will becoming from server */}
                </TouchableOpacity>
                <TouchableOpacity style={[style.wrapper, { marginBottom: 30 }]} onPress={() => navigation.navigate()}>
                    <Text style={style.textStyle}>Security Questions</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.logoutWrapperStyle}>
                <Text style={style.logoutTextStyle}>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    wrapper: {
        paddingTop: 30,
        paddingBottom: 10,
        // borderBottomWidth: 0.1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyle: {
        color: "black", // "#1139"
        fontWeight: "400"
    },
    logoutWrapperStyle: {
        borderRadius: 50,
        paddingTop: 20,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,
        paddingBottom: 20,
        backgroundColor: "#fff"
    },
    logoutTextStyle: {
        color: "purple",
        fontWeight: "900",
        textAlign: "center"
    }
})