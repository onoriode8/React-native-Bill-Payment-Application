import { StyleSheet, Text, View } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Header() {
  return (
    <View style={style.containerView}>
        <View style={style.wrapperView}>
            <Text style={style.name}>OU</Text>
            <View>
                <Text style={style.nameWrapper}>Welcome</Text>
                <Text style={style.nameWrapper}>Onoriode Umukoro</Text>
            </View>
        </View>

        <View style={style.supportWrapper}>
            <MaterialIcons name="support-agent" size={27} color="purple" style={style.agent}/>
            <MaterialIcons name="notifications" size={27} color="purple" />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    containerView: {
        marginTop: 30, //check for android device size
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
    },
    wrapperView: {
        alignItems: "center",
        flexDirection: "row"
    },
    name: {
        color: "#fff",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 50,
        marginRight: 5,
        backgroundColor: "purple"
    },
    nameWrapper: {
        fontSize: 17
    },
    supportWrapper: {
        flexDirection: "row"
    },
    agent: {
        paddingRight: 15
    }
})
