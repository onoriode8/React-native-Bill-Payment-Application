import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

import AuthContext from '../hooks/context';

export default function MoonBackground() {
    const { backgroundColor, setBackgroundColor } = useContext(AuthContext)
    return (
        <View style={styles.viewWrapper}>
            <Text style={styles.appName}>BillQuick</Text>
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
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    appName: {
        fontSize: 17,
        fontWeight: "900",
        color: 'purple'
    },
    moonIconWrapper: {
        alignItems: "center",
        flexDirection: "row",
    }
})