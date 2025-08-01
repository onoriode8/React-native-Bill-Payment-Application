import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';


export default function Footer () {
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
        position: "fixed",
        marginTop: Platform.OS === "ios" ? 430 : 300,
        padding: 10,
        justifyContent: "space-between",
    },
    wrapper: {
        alignItems: "center"
    }
})