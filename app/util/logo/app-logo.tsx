import { View, Image, StyleSheet } from "react-native";

import BillQuick from '../../../assets/images/BillQuick_logo.png'


export default function AppLogo() {
    return (
        <View>
            <Image source={BillQuick} style={styles.billQuickLogoStyle}/>
        </View>
    )
}


const styles = StyleSheet.create({
    billQuickLogoStyle: {
        width: 150,
        height: 100,
        color: "purple",
        fontWeight: "900",

        tintColor: "purple"
    }
})