import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AuthContext from '../hooks/context';


export default function Footer () {
    const { backgroundColor } = useContext(AuthContext)
    return (
        <SafeAreaView>
            <View style={style.viewWrapper}>
                <View style={style.wrapper}>
                    <AntDesign name="home" size={Platform.OS === "ios" ? 23 : 19} color="black" />
                    <Text>Home</Text>
                </View>
                <View style={style.wrapper}>
                    <FontAwesome6 name="user-large" size={Platform.OS === "ios" ? 18 : 14} color="black" />
                    <Text>Profile</Text>
                </View>
                <View style={style.wrapper}>
                    <MaterialIcons name="receipt" size={Platform.OS === "ios" ? 22 : 18} color="black" />
                    <Text>History</Text>
                </View>
                <View style={style.wrapper}>
                    <MaterialIcons name="settings" size={Platform.OS === "ios" ? 22 : 18} color="black" />
                    <Text>Settings</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    viewWrapper: {
        alignItems: "center",
        flexDirection: "row",

        // position: "absolute",
        // left: 0,
        // right: 0,
        // // bottom: 0,
        // backgroundColor: "#fff",

        marginTop: Platform.OS === "ios" ? 410 : 300,
        // padding: 10,
        // margin: -20,
        justifyContent: "space-between",
        borderTopWidth: 0.2,
        paddingTop: 10
    },
    wrapper: {
        alignItems: "center",
        backgroundColor: "#fff"
    }
})