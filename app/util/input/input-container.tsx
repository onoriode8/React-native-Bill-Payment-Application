import { SafeAreaView, View, Text, StyleSheet, TextInput, Platform } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';

import SelectNetwork from './select-network'
import PhoneNumberList from "./phonenumber-list";
// import Backdrop from "../backdrop/backdrop";


interface InputContainerProps {
    numb: string,
    show: boolean,
    click: () => void,
    showNumberList: boolean,
    change: (nu: string) => void,
    setShowNumberList: () => void
}

export default function InputContainer(
    { change, numb, show, click, showNumberList, setShowNumberList }: InputContainerProps) {
    return (
        <View style={styles.inputWrapper}>
            <View style={styles.viewInputWrapper}>
                <View style={styles.networkInnerWrapper}>
                    <View style={styles.networkWrapper}>
                        <Text style={styles.networkText} onPress={click}>MTN</Text>
                    </View>
                    <Entypo onPress={click} name="chevron-thin-down" size={20} color="black" />
                </View>
                <TextInput style={styles.textInput} keyboardType="number-pad" 
                    onPress={setShowNumberList}
                    disableKeyboardShortcuts={ numb.length === 11 ? true : false }
                    // disableFullscreenUI={ numb.length === 11 ? true : false }
                    placeholder="0XX XXXX XXXX" onChangeText={change}/> 
            </View>
            {show && <SelectNetwork clicked={click} />}
            {/* map throw the list of phone number and render them accordingly, remember only 4 or 5 should be saved to the list on server*/}
            {showNumberList && <PhoneNumberList />}
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 20
    },
    viewInputWrapper: {
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 8,
        marginRight: 8,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    networkInnerWrapper: {
        alignItems: "center",
        flexDirection: "row",
        borderRightWidth: 0.3,
        paddingRight: 8
    },
    networkWrapper: {
        borderRadius: 50,
        // marginTop: 10,
        paddingTop:  Platform.OS === "ios" ? 10 : 5,
        paddingBottom: Platform.OS === "ios" ? 10 : 5,
        paddingLeft: Platform.OS === "ios" ? 3 : 1,
        paddingRight: Platform.OS === "ios" ? 3 : 1,
        marginLeft: 5,
        marginRight: 8,
        backgroundColor: "green" //change later to use the network image instead.
    },
    networkText: {
        fontSize: 12, //Platform.OS === "android" ? 12 : ,
        color: "#fff"
    },
    text: {
        marginLeft: 5
    },
    textInput: {
        padding: 10,
        fontSize: 15,
        fontWeight: "900",
        color: "black"
    }
})