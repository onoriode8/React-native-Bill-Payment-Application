import { TouchableOpacity, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function NavigateLiveChat() {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity>
            <Text style={{ color: "#fff" }} onPress={() => navigation.navigate("live-chat") }>LiveChat</Text>
        </TouchableOpacity>
    );
}