import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';



export default function ServiceModel () {
    return (
        <View style={style.contWrapper}>
            <Text>Quick Service</Text>
            <View style={style.viewWrapper}>
                <View style={style.wrapper}>
                    <MaterialIcons name="signal-cellular-alt" size={24} color="purple" />
                    <Text>Airtime</Text>
                </View>

                <View style={style.wrapper}>
                    <FontAwesome name="mobile-phone" size={24} color="purple" />
                    <Text>Data</Text>
                </View>

                <View style={style.wrapper}>
                    <Feather name="tv" size={24} color="purple" />
                    <Text>TV</Text>
                </View>

                <View style={style.wrapper}>
                    <MaterialCommunityIcons name="lightbulb-variant-outline" size={24} color="purple" />
                    <Text>Electricity</Text>
                </View>

                <View style={style.wrapper}>
                    <FontAwesome name="bullhorn" size={20} color="purple" />
                    <Text>Invitation</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    contWrapper: {
        marginTop: 30
    },
    viewWrapper: {
        marginTop: 45,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    wrapper: {
        borderWidth: 0.3,
        borderColor: "purple",
        padding: 8,
        borderRadius: 10,
        alignItems: "center"
    }
})