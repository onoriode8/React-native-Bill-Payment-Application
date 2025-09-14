import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AuthContext from "../../hooks/context";


export default function Header() {
  const { backgroundColor, userPersonalData } = useContext(AuthContext)

  const navigation = useNavigation<any>();

  return (
    <View style={style.containerView}>
        <View style={style.wrapperView}>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Text style={style.name}>OU</Text>
            </TouchableOpacity>
            <View>
                <Text style={[style.nameWrapper, { 
                    color: backgroundColor ? "#fff" : "#fff"}]}>Welcome</Text>
                <Text style={[style.nameWrapper, { 
                    color: backgroundColor ? "#fff" : "#fff"}]}>Onoriode Umukoro {userPersonalData.fullname}</Text>
            </View>
        </View>

        <View style={style.supportWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate("support-agent")}> 
                <MaterialIcons name="support-agent" size={27} color="#fff" style={style.agent}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("notification")}>
                <MaterialIcons name="notifications" size={27} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    containerView: {
        marginTop: 30, //check for android device size
        flexDirection: "row",
        justifyContent: "space-between",
        

        // elevation: 5, // Android shadow
        // shadowColor: "#000", //ios shadow
        // shadowOpacity: 0.2,
        // backgroundColor: "#fff",
        // // paddingTop: 30,
        // shadowOffset: { width: 0, height: 3 }
    },
    wrapperView: {
        alignItems: "center",
        flexDirection: "row"
    },
    name: {
        color: "purple",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 50,
        marginRight: 5,
        // borderWidth: 0.5,
        backgroundColor: "#fff"
    },
    nameWrapper: {
        fontSize: 17,
        //color: "#fff" //
    },
    supportWrapper: {
        flexDirection: "row"
    },
    agent: {
        paddingRight: 15
    }
})
