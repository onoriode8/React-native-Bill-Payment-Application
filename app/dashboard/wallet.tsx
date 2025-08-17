import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";
import { useState, useContext } from 'react';
import { Platform, StyleSheet, Text, View } from "react-native";

import AuthContext from '../hooks/context';


export default function Wallet() {
  const [showEye, setShowEye] = useState<boolean>(true)
//   const [hashed, setHashed] = useState<boolean>(false)

  const { backgroundColor } = useContext(AuthContext)

  const setShowEyeHandler = () => {
    setShowEye(prevState => !prevState)
  }

  return (
    <View style={style.viewWrapper}>
        <View style={style.nairaWrapper}> {/* change from "0.00" string to number below */}
            <Text style={[style.naira, 
                { color: backgroundColor ? "#fff" : "black"}]}>₦ { showEye ? "0.00" : "*****" }</Text>
            {showEye && <AntDesign name="eye" size={20} color="#ccc" onPress={setShowEyeHandler}/>}
            {!showEye && <FontAwesome name="eye-slash" size={20} color="#ccc" onPress={setShowEyeHandler}/>}
        </View>
        <View style={style.addmoneyWrapper}>
            <Text style={{color:"#fff"}}>+</Text>
            <Link href="/add-money">
                <Text style={{color:"#fff"}}>Add Money</Text>
            </Link>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    viewWrapper: {
        marginTop: 35,
        paddingBottom: 20,
        alignItems: "center",
        flexDirection: "row",
        // borderBottomWidth: Platform.OS === "ios" ? 0.2 : 0.3, //the line below the wallet component
        justifyContent: "space-between",

        // elevation: 5, // Android shadow
        // shadowColor: "#000", //ios shadow
        // shadowOpacity: 0.2,
        // borderBottomWidth: 0.2,
        
        // backgroundColor: "#fff",
        // shadowOffset: { width: 0, height: 3 }
    },
    nairaWrapper: {
        alignItems: "center",
        flexDirection: "row",
    },
    naira: {
        fontSize: 23,
        marginRight: 10
    },
    addmoneyWrapper: {
        alignItems: "center",
        flexDirection: "row",
        // borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "purple"
    }
})
