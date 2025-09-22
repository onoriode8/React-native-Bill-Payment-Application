import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import BillQuickSpinner from '../backdrop/billQuickSpinner';
import BillQuickNumericKeyBoard from '../BillQuick-keyboard/billQuick-numeric-keyboard';
import Backdrop from '../backdrop/backdrop';
import { useEnterPaymentPin } from '../../custom/verify-otp';


interface VerifyPinOverLayProps {
    path: string
}

export default function VerifyPinOverLay({ path }: VerifyPinOverLayProps) { //continue with the overlay payment to be on the bottom later with backdrop

    const { selectedNumber, handlePress, error, isValid,
        deleteLastNumber, loading, navigation } = useEnterPaymentPin()

    return (
        <View style={style.wrapContainer}>
            {loading && <Backdrop />}
            {loading && <BillQuickSpinner />}

            <View style={style.keyboardWrapper}>
                <View style={style.viewWrapper}>
                    <TouchableOpacity>
                        <Ionicons name="close-outline" size={25} color="black" 
                        onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold"}}>Enter Payment PIN</Text>
                    <Text></Text>
                </View>
                <View style={style.pinWrapper}>
                    <Text style={style.textBox}>{selectedNumber[0]}</Text>
                    <Text style={style.textBox}>{selectedNumber[1]}</Text>
                    <Text style={style.textBox}>{selectedNumber[2]}</Text>
                    <Text style={style.textBox}>{selectedNumber[3]}</Text>
                </View>
            </View>
            {error.length === 0 ? null : <Text style={style.errorStyle}>{error}</Text>}
            <View style={{ flexDirection: "column", alignItems: "center", marginTop: 20 }}>
                {isValid === false ? <Text style={style.errorStyle}>Invalid Pin Entered.</Text>: null}
                {isValid === false ? <Text style={style.errorStyle}>Did you forgot your Pin, try reseting it.</Text>: null}
            </View>
            <View>
                <BillQuickNumericKeyBoard 
                    handlePress={handlePress} deleteLastNumber={deleteLastNumber}/>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    wrapContainer: {
       width: "100%",
       zIndex: 5,
       bottom: 0,
       paddingTop: 20,
       paddingLeft: 8,
       paddingRight: 10,
       paddingBottom: 40,
       position: "absolute",
       backgroundColor: "#fff"
    },
    keyboardWrapper: {
        flexDirection: "column",
        justifyContent: "center"
    },
    viewWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    pinWrapper: {
        marginTop: 40, //Platform.OS === "ios" ? 40 : 
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    errorStyle: {
        textAlign: "center", 
        color: "red", 
        fontSize: 11, 
        // marginTop: 20 
    },
    textBox: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
        paddingLeft: 20,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 8,
        borderWidth: 0.2,
        borderColor: "purple"
    }
})