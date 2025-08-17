import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}> {/*this sets the bottom tab activeColor*/}
      <AntDesign name="eye" size={20} color="#ccc"/>
      {/* this tabBarIcon below allowed us to add icons to the tabBar and gave us an argument with the focused & color */}
      <Tabs.Screen name="index" 
          options={{ title: "", tabBarIcon: ({focused, color}) => ( 
            <FontAwesome name="eye-slash" size={20} color={color} /> 
          )}
      }/>
      <Tabs.Screen name="login" options={{ title: "Login"}} />
      <Tabs.Screen name="add-money" options={{ title: "Add Money" }} /> { /* check if its add-money/add-money folder stuff*/}
    </Tabs>
  );
}