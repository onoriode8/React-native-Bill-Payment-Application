import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function SupportAgent() {
    return (
        <ScrollView style={{backgroundColor: "#fff"}}>
            <View style={styles.liveChatWrapper}>
                <Link href="/live-chat"><Text>LiveChat</Text></Link>
            </View>
            <View style={styles.wrappedSupport}>
                <View style={styles.supportIconWrapper}>
                    <MaterialIcons name="support-agent" size={40} color="#fff" />
                </View>
                <View style={styles.wrappedPhone}>
                    <FontAwesome name="phone" size={20} color="blue" style={styles.borderWrapper} />
                    <Text>09055364280</Text>
                </View>

                <View style={styles.wrappedWhatsapp}>
                    <FontAwesome6 name="whatsapp" size={24} color="green" style={styles.whatsappStyles}/>
                    <Link href="/add-money"><Text>WhatsApp</Text></Link> {/*add my whatsapp link directly here to the whatsapp contact path */}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    liveChatWrapper: {
        alignItems: "flex-end",
        marginBottom: 50,
        marginRight: 10,
        marginTop: 5
    },
    wrappedSupport: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    supportIconWrapper: {
        // borderWidth: 0.3,
        padding: 10,
        borderRadius: 100,
        marginBottom: 80,
        backgroundColor: "rgba(149, 4, 193, 0.8)"
    },
    wrappedPhone: {
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        width: Platform.OS === "ios" ? 370 : 340,
        borderRadius: 10
    },
    wrappedWhatsapp: {
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        padding: 10,
        width: Platform.OS === "ios" ? 370 : 340,
        marginTop: 30,
        borderRadius: 10,
        borderColor: "#ccc",
    },
    borderWrapper: {
        // borderWidth: 1,
        padding: 5,
        borderRadius: 30,
        marginRight: 30,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: "rgba(154, 205, 236, 0.3)"
    },
    whatsappStyles: {
        marginRight: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 50,
        backgroundColor: "rgba(154, 205, 236, 0.3)"
    }
})