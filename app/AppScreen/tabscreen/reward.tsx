import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'



export default function Reward() {
  const [reward, setReward] = useState();
  return (
    <SafeAreaView>
        <View>
            <Text>Reward View</Text>
        </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    
})