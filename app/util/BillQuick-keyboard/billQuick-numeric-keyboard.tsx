import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


interface BillQuickNumericKeyBoardProps {
    handlePress: (num: number) => void,
    deleteLastNumber: () => void
}


export default function BillQuickNumericKeyBoard(
    { handlePress, deleteLastNumber }: BillQuickNumericKeyBoardProps) {

    return (
        <View style={style.numericKeyboardWrapper}>
            <View style={style.numberButtonWrapper}>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(1)}>
                    <Text style={style.textStyle}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(2)}>
                    <Text style={style.textStyle}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(3)}>
                    <Text style={style.textStyle}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(4)}>
                    <Text style={style.textStyle}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(5)}>
                    <Text style={style.textStyle}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(6)}>
                    <Text style={style.textStyle}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(7)}>
                    <Text style={style.textStyle}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(8)}>
                    <Text style={style.textStyle}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={() => handlePress(9)}>
                    <Text style={style.textStyle}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberZeroWrapper} onPress={() => handlePress(0)}>
                    <Text style={style.textStyle}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.numberButton} onPress={deleteLastNumber}>
                    <FontAwesome6 name="delete-left" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    numericKeyboardWrapper: {
        marginTop: 40,
    },
    numberButtonWrapper: {
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    numberButton: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 50,
        paddingLeft: 50,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 12,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        backgroundColor: "#fff",
        shadowOffset: {  height: 1, width: 1 }
    },
    textStyle: {
        color: "#000",
        fontSize: 17,
        fontWeight: "900"
    },
    numberZeroWrapper: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 105,
        paddingLeft: 105,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 8,
        elevation: 5,
        shadowOpacity: 0.2,
        shadowColor: "#000",
        backgroundColor: "#fff",
        shadowOffset: {  height: 1, width: 1 }
    }
})