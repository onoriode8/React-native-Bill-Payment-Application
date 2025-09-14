import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function PaymentPinOverLay() { //continue with the overlay payment to be on the bottom later with backdrop
    return (
        <View style={style.wrapContainer}>
            <View style={style.viewWrapper}>
                <Ionicons name="close-outline" size={25} color="black" /> {/* onPress={closeBottomOverLay} */}
                <Text style={{fontWeight: "bold"}}>Enter Payment PIN</Text>
                <Text></Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    wrapContainer: {
    //    flex: 1, 
       width: "100%",
       zIndex: 6,
       bottom: 0,
    //    marginTop: 200,
       position: "absolute",
       backgroundColor: "#fff"
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})