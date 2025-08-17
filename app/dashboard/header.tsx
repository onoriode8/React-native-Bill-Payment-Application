import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import AuthContext from "../hooks/context";


export default function Header() {
  const { backgroundColor } = useContext(AuthContext)

  return (
    <View style={style.containerView}>
        <View style={style.wrapperView}>
            <Text style={style.name}>OU</Text>
            <View>
                <Text style={[style.nameWrapper, { 
                    color: backgroundColor ? "#fff" : "black"}]}>Welcome</Text>
                <Text style={[style.nameWrapper, { 
                    color: backgroundColor ? "#fff" : "black"}]}>Onoriode Umukoro</Text>
            </View>
        </View>

        <View style={style.supportWrapper}>
            <Link href="/support-agent"> {/* add the pages first => support-agent */}
                <MaterialIcons name="support-agent" size={27} color="purple" style={style.agent}/>
            </Link>
            <Link href="/notification"> {/*  add the pages first => notification */}
                <MaterialIcons name="notifications" size={27} color="purple" />
            </Link>
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
