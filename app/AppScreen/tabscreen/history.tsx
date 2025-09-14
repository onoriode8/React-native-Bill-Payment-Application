import { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'



export default function History() {
    const [history, setHistory] = useState<[]>([])
    return (
        <SafeAreaView>
            <View>
                <Text>History View</Text>
            </View>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    
})