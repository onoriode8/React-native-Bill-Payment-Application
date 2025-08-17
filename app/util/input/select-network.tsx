import { Image, StyleSheet, Text, View, Platform } from "react-native";

import airtelImage from '../../../assets/images/airtel_image.png';
import gloImage from '../../../assets/images/glo_image.png';
import mtnImage from '../../../assets/images/mtn_image.jpg';
import nineMobileImage from '../../../assets/images/nine_mobile_image.jpeg';
import Backdrop from "../backdrop/backdrop";


interface SelectNetworkProps {
    clicked: () => void
}

export default function SelectNetwork({ clicked }: SelectNetworkProps) {
    return (
        <View> {/* style={styles.networkViewWrapper} */}
            <Backdrop />
            <View style={styles.networkViewWrapper}>
                <View style={styles.networkW}>
                    <View style={styles.networkStylesWrapper}>
                        <View style={styles.networkStyles}>
                            <Image source={mtnImage} style={styles.imageStyle}/>
                            <Text onPress={clicked}>MTN</Text>
                        </View>
                        <Text onPress={clicked} style={styles.checkBox}>✓</Text>
                    </View>
                    <View style={styles.networkStylesWrapper}>
                        <View style={styles.networkStyles}>
                            <Image source={airtelImage} style={styles.imageStyle}/>
                            <Text onPress={clicked}>Airtel</Text>
                        </View>
                        <Text onPress={clicked} style={styles.checkBox}>✓</Text>
                    </View>
                    <View style={styles.networkStylesWrapper}>
                        <View style={styles.networkStyles}>
                            <Image source={gloImage} style={styles.imageStyle}/>
                            <Text onPress={clicked}>Glo</Text> 
                        </View>
                        <Text onPress={clicked} style={styles.checkBox}>✓</Text>
                    </View>
                    <View style={styles.networkStylesWrapper}>
                        <View style={styles.networkStyles}>
                            <Image source={nineMobileImage} style={styles.imageStyle} />
                            <Text onPress={clicked}>9Mobile</Text>
                        </View>
                        <Text onPress={clicked} style={styles.checkBox}>✓</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    networkViewWrapper: {
        //marginTop: 550, //Platform.OS === "ios" ? 550 : 
        position: "absolute",
        zIndex: 6,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 } //sweet
    },
    networkStylesWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff" 
    },
    networkStyles: {
        paddingTop: 10, //Platform.OS === "ios" ? 10 : 
        paddingBottom: 10, //Platform.OS === "ios" ? 10 : 
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    checkBox: {
        marginRight: 10,
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: "#eee"
    },
    imageStyle: {
        width: 30, //Platform.OS === "ios" ? 30 : 
        height: 30, //Platform.OS === "ios" ? 30 : 
        marginLeft: Platform.OS === "ios" ? 20 : 10,
        marginRight: 20,
        borderRadius: 100
    },
    networkW: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 10,
        width: Platform.OS === "ios" ? 395 : 340,  //Platform.OS === "ios" ? 30 : 
        borderRadius: 10,
        backgroundColor: "#fff"
    }
})