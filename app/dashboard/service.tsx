import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default function ServiceModel () {
    return (
        <View style={style.contWrapper}>
            <Text style={{color: "black", marginTop: 10, marginLeft: 10,}}>Quick Service</Text>
            <View style={style.viewWrapper}>
                <Link href="/airtime">
                    <View style={style.wrapper}>
                        <View style={style.iconWrapper}>
                            <MaterialIcons name="signal-cellular-alt" size={24} color="#fff" />
                        </View>
                        <Text style={{color:"black"}}>Airtime</Text>
                    </View>
                </Link>

                <Link href="/">
                    <View style={style.wrapper}>
                        <View style={style.specialWrapper}>
                            <FontAwesome name="mobile-phone" size={24} color="#fff" />
                        </View>
                        <Text style={{color:"black"}}>Data</Text>
                    </View>
                </Link>

                <Link href="/">
                    <View style={style.wrapper}>
                        <View style={{backgroundColor: "purple", borderRadius: 20, padding: 5, paddingBottom: 7}}>
                            <Feather name="tv" size={21} color="#fff" />
                        </View>
                        <Text style={{color:"black"}}>TV</Text>
                    </View>
                </Link>

                <Link href="/">
                    <View style={style.wrapper}>
                        <View style={style.iconWrapper}>
                            <MaterialCommunityIcons name="lightbulb-variant-outline" size={24} color="#fff" />
                        </View>
                        <Text style={{color:"black"}}>Electricity</Text>
                    </View>
                </Link>
                
                <Link href="/">
                    <View style={style.wrapper}>
                        <View style={{backgroundColor: "purple", borderRadius: 20, padding: 5}}>
                            <FontAwesome name="bullhorn" size={20} color="#fff" />
                        </View>
                        <Text style={{color:"black"}}>Invitation</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    contWrapper: {
        marginTop: 30,
        paddingBottom: 15,
        borderRadius: 15,
        // backgroundColor: "purple"
        elevation: 5, // Android shadow
        shadowColor: "#000", //ios shadow
        shadowOpacity: 0.2,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 }
    },
    viewWrapper: {
        marginTop: Platform.OS === "ios" ? 45 : 35,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    wrapper: {
        // borderWidth: 0.3,
        borderColor: "purple",
        padding: 8,
        borderRadius: Platform.OS === "ios" ? 10 : 12,
        alignItems: "center",
        backgroundColor: "#fff", //"rgba(154, 205, 236, 0.2)"

        elevation: 5, // Android shadow
        shadowColor: "#000", //ios shadow
        shadowOpacity: 0.2,
        // backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 }
    },
    iconWrapper : {backgroundColor: "purple", borderRadius: 20, padding: 5},
    specialWrapper: {
        backgroundColor: "purple", 
        borderRadius: 20, paddingTop: 5, 
        paddingBottom: 5, paddingRight: 12,paddingLeft: 12
    }
})