import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from "react-native";
import { useContext } from 'react';

import AddMoney from './AppScreen/addMoney/add-money';
import LiveChat from './AppScreen/contact/live-chat';
import NavigateLiveChat from './AppScreen/contact/navigate-live-chat';
import SupportAgent from './AppScreen/contact/support-agent';
import DashBoard from './AppScreen/dashboard/dashboard';
import Notification from './AppScreen/notification/notification';
import ProfileScreen from './AppScreen/profile/profileScreen';
import ChangeAppPassword from "./AppScreen/reset-pin/change-app-password";
import ChangePin from "./AppScreen/reset-pin/change-pin";
import createPaymentPin from './AppScreen/reset-pin/create-payment-pin';
import ForgotAppPassword from "./AppScreen/reset-pin/forgot-app-password";
import ForgotPin from "./AppScreen/reset-pin/forgot-pin";
import Airtime from './AppScreen/services/airtime';
import History from './AppScreen/tabscreen/history';
import Reward from './AppScreen/tabscreen/reward';
import Settings from './AppScreen/tabscreen/settings';
import Login from './AuthScreen/login';
import AuthContext from './hooks/context';
import ContextProvider from './hooks/contextProvider';
import VerifyPinOverLay from './util/overlay/verify-pin-overlay';
import VerifyEmailAddress from './util/verify-identity/verify-email-address';
import VerifyPhoneNumber from './util/verify-identity/verify-phone-number';
import VerifyEmailWithCode from './util/verify/verifyEmail';
import TwoFactorAuthenticator from "./AppScreen/security/2fa-auth";


const Tab = createBottomTabNavigator()


function TabsRootLayout() {
  const { authentication, userPersonalData } = useContext(AuthContext);
  console.log("Data from layout", userPersonalData)
  return (
      <Tab.Navigator initialRouteName='dashboard' 
        screenOptions={{ }}>
        <Tab.Screen name="dashboard" component={DashBoard} options={{ 
          title: Platform.OS === "ios" ? "Home" : "Dashboard",
          headerStyle: { 
            backgroundColor: Platform.OS === "ios" ? "purple" : "#fff"}, 
          headerTitle: Platform.OS === "ios" ? "Home" : "Dashboard", headerTintColor: "purple" }}/>
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
        <Stack.Screen name="verify-pin" component={VerifyPinOverLay} options={{ headerShown: false }} />
        <Stack.Screen name="verify-phone-number" component={VerifyPhoneNumber} 
          options={{ title: "Verify Phone Number", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "P",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="verify-email-address" component={VerifyEmailAddress} 
          options={{ title: "Verify Email", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "P",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="change-pin" component={ChangePin} 
          options={{ title: "Reset Payment Pin", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "P",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="forgot-pin" component={ForgotPin} 
          options={{ title: "Reset Payment Pin", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "P",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="create-payment-pin" component={createPaymentPin} 
          options={{ title: "Create Payment Pin", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "P",
          headerBackTitleStyle: { fontSize: 1 } }} />     
        <Stack.Screen name="change-app-password" component={ChangeAppPassword}
          options={{ title: "Change App Password", headerStyle: { backgroundColor: "purple" }, 
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "C",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="forgot-app-password" component={ForgotAppPassword} 
          options={{ title: "Change App Password", headerStyle: { backgroundColor: "purple" }, 
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerBackTitle: "C",
          headerBackTitleStyle: { fontSize: 1 } }} />
        <Stack.Screen name="two-factor-auth" component={TwoFactorAuthenticator} 
          options={{ title: "Set 2FA", headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold"} }} />
      </Stack.Navigator>
    </ContextProvider>
  );
}