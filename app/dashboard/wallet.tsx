import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform } from "react-native";
// import { Link } from "expo-router";


export default function Wallet() {
  const [showEye, setShowEye] = useState<boolean>(true)

  const setShowEyeHandler = () => {
    setShowEye(prevState => !prevState)
  }

  return (
    <View style={style.viewWrapper}>
        <View style={style.nairaWrapper}>
            <Text style={style.naira}>₦ 0.00</Text>
            {showEye && <AntDesign name="eye" size={20} color="#ccc" onPress={setShowEyeHandler}/>}
            {!showEye && <FontAwesome name="eye-slash" size={20} color="#ccc" onPress={setShowEyeHandler}/>}
        </View>
        <View style={style.addmoneyWrapper}>
            <Text>+</Text>
            <Text>Add Money</Text>
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
        borderBottomWidth: Platform.OS === "ios" ? 0.2 : 0.3,
        justifyContent: "space-between"
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
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    }
})
