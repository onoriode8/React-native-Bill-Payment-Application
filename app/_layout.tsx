import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddMoney from './AppScreen/addMoney/add-money';
import LiveChat from './AppScreen/contact/live-chat';
import SupportAgent from './AppScreen/contact/support-agent';
import DashBoard from './AppScreen/dashboard/dashboard';
import Notification from './AppScreen/notification/notification';
import Airtime from './AppScreen/services/airtime';
import Login from './AuthScreen/login';
import AuthContext from './hooks/context';
import ContextProvider from './hooks/contextProvider';
import VerifyEmailWithCode from './util/verifyEmail';
import ProfileScreen from './AppScreen/profile/profileScreen'
import NavigateLiveChat from './AppScreen/contact/navigate-live-chat'
import Settings from './AppScreen/tabscreen/settings';
import History from './AppScreen/tabscreen/history';
import Reward from './AppScreen/tabscreen/reward';



const Tab = createBottomTabNavigator()


function TabsRootLayout() {
  const { authentication, userPersonalData } = useContext(AuthContext);
  console.log("Data from layout", userPersonalData)
  return (
      <Tab.Navigator initialRouteName='dashboard' 
        screenOptions={{ }}>
        <Tab.Screen name="dashboard" component={DashBoard} options={{ title: "Home",
          headerStyle: { backgroundColor: "purple"}, headerTitle: "Home", 
          headerTintColor: "purple" }}/>
        <Tab.Screen name="reward" component={Reward} options={{ title: "Reward", 
          headerStyle: { backgroundColor: "purple" }, headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" } }}/>
        <Tab.Screen name="history" component={History} options={{ title: "History",
          headerStyle: { backgroundColor: "purple" }, headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
         }}/>
        <Tab.Screen name="settings" component={Settings} options={{ title: "Settings",
          headerStyle: { backgroundColor: "purple" }, headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
         }} />
      </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

//for expo. later will eject to React Native CLI to the below routes.
export default function RootLayout() {
  const { authentication, userPersonalData } = useContext(AuthContext);
  console.log("Data from layout", userPersonalData);

  return (
   <ContextProvider>
      <Stack.Navigator initialRouteName='login'>
        {/* <Stack.Screen name="index" options={{headerBackVisible: false, headerLeft: () => null, title: "Dashboard"}}/> */}
        {/* <Stack.Screen name="dashboard" component={DashBoard} 
          options={{ title: "Dashboard", headerTitle: "", headerShown: false,
          headerStyle: { backgroundColor: "purple"}, headerBackVisible: false }} /> */}
        <Stack.Screen name="dashboard" component={TabsRootLayout} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={Login} options={{ title: "Login", headerShown: false }} />
        <Stack.Screen name="add-money" component={AddMoney} options={{ title: "Add Money", headerStyle: { backgroundColor: "purple"}, 
          headerTitleStyle: { fontWeight: "bold" }, headerTintColor: "#fff",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="support-agent" component={SupportAgent} options={{ title: "Contact Support", 
          headerStyle: { backgroundColor: "purple" }, headerRight: () => (<NavigateLiveChat />),
          headerTintColor: "#fff", headerBackTitleStyle: { fontSize: 1 }, headerBackTitle: "c" }} />
        <Stack.Screen name="notification" component={Notification} options={{ title: "Notification",
          headerStyle: { backgroundColor: "purple" }, headerTintColor: "#fff", 
          headerTitleStyle: { fontWeight: "bold"}, headerBackTitle: "N",headerBackTitleStyle: { fontSize: 1 }
         }} />
        <Stack.Screen name="live-chat" component={LiveChat} options={{ title: "Live Chat",
          headerBackTitleStyle: { fontSize: 1 }, headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#fff", headerStyle: { backgroundColor: "purple" }
         }} />
        <Stack.Screen name="airtime" component={Airtime} options={{ title: "Airtime",
          headerStyle: { backgroundColor: "purple" }, headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#fff", headerBackTitle: "A", headerBackTitleStyle: { fontSize: 1 }
         }} />
        <Stack.Screen name="verify-email" component={VerifyEmailWithCode} options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{ title: "Profile",
          headerTintColor: "#fff", headerStyle: { backgroundColor: "purple" }, headerBackTitle: "P",
          headerTitleStyle: { fontWeight: "bold" }, headerBackTitleStyle: { fontSize: 1 } 
         }} />
      </Stack.Navigator>
    </ContextProvider>
  );
}