import { StyleSheet, View } from 'react-native'



export default function Backdrop() {
    return (
        <View style={styles.backdropStyle}></View>
    )
}

const styles = StyleSheet.create({
    backdropStyle: {
        // width: 1000,
        height: 1000,
        position: "absolute",
        zIndex: 5,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
})