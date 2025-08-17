import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from "react-native";


export default function AddMoney() {
    return (
        <View style={style.wrapperView}>
            <View style={style.bankWrapper}>
                <View style={style.bankIconWrapper}>
                    <MaterialCommunityIcons name="bank" size={34} color="black" />
                </View>
                <View style={style.mobileWrapper}>
                    <Text style={style.bankText}>Bank Transfer</Text>
                    <Text style={style.bankText}>Add money via mobile banking</Text>
                </View>
            </View>
            <View>
                <Text style={style.accountDetailsText}>Account Details</Text>
                <View style={style.accountDetailsWrapper}>
                    <View style={style.nameWrapper}>
                        <Text style={style.accountName}>Account Name</Text>
                        <Text style={style.accountName}>Onoriode Umukoro {}</Text>
                    </View>
                    <View style={style.nameWrapper}>
                        <Text style={style.accountName}>Bank</Text>
                        <Text style={style.accountName}>Wema Bank {}</Text>
                    </View>
                </View>
                <View style={style.nameWrapper}>
                    <Text style={style.accountName}>Account Number</Text>
                    <View style={style.wrappedNumber}>
                        <Text style={style.accountName}>2449782725 {}</Text>
                        <Feather name="copy" size={20} color="black" style={{marginLeft: 8}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapperView: {
        alignItems: "flex-start",
        flexDirection: "column",
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30
    },
    bankWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 50
    },
    bankIconWrapper: {
        borderWidth: 0.5,
        padding: 5,
        marginRight: 13
    },
    mobileWrapper: {
    },
    bankText: {
        fontSize: 17,
        paddingTop: 5
    },
    accountDetailsText: {
        fontSize: 17,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    accountDetailsWrapper: {
        marginTop: 10,
        // alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nameWrapper: {
        paddingTop: 25,
        marginRight: 40
    },
    accountName: {
        fontSize: 17,
        marginTop: 5
    },
    wrappedNumber: {
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    }
})