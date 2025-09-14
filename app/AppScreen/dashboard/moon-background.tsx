import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import AuthContext from '../../hooks/context';
import AppLogo from '../../util/logo/app-logo';

export default function MoonBackground() {
    const { backgroundColor, setBackgroundColor } = useContext(AuthContext)
    return (
        <View style={styles.viewWrapper}>
            <AppLogo />
            <View style={styles.moonIconWrapper}>
                {!backgroundColor && <Entypo name="moon" size={24} color="black" onPress={setBackgroundColor} />}
                {backgroundColor && <Ionicons name="moon-outline" size={24} color="#fff" onPress={setBackgroundColor} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewWrapper: {
        marginTop: 5,
        marginLeft: -25, //Platform.OS === ""check for ios and android
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    moonIconWrapper: {
        alignItems: "center",
        flexDirection: "row",
    }
})