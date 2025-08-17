import { View, Text , StyleSheet } from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign';
import Backdrop from "../backdrop/backdrop";


export default function PhoneNumberList() {
    return (
        <View>
            <Backdrop />
            <View style={styles.numberContainer}>
                <View style={styles.numberWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} 9mobile</Text>
                        <Text style={styles.text}>{} 09055364280</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} 15 Aug </Text>
                        <AntDesign name="delete" size={20} color="black" />
                    </View>
                </View>

                {/* delete  this core component below and get the list from server*/}
                <View style={styles.numberWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} Glo</Text>
                        <Text style={styles.text}>{} 09055364280</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} 15 Aug </Text>
                        <AntDesign name="delete" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.numberWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} airtel</Text>
                        <Text style={styles.text}>{} 09055364280</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} 15 Aug </Text>
                        <AntDesign name="delete" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.numberWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} mtn</Text>
                        <Text style={styles.text}>{} 09055364280</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{} 15 Aug </Text>
                        <AntDesign name="delete" size={20} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    numberContainer: {
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 20,
        marginTop: 0.1,
        paddingRight: 10,
        paddingLeft: 10,
        // marginBottom: 100,
        position: "absolute",
        zIndex: 6,
        right: 0,
        left: 0,
        elevation: 5, // Android shadow
        shadowColor: "#000", //ios shadow
        shadowOpacity: 0.2,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 } //sweet
    },
    numberWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textWrapper: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        color: "#545353ff",
        fontWeight: "600"
    }
})