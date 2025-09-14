import { useContext } from "react";
import { SafeAreaView, View } from "react-native";

import DashBoard from './AppScreen/dashboard/dashboard';
import Login from "./AuthScreen/login";
import AuthContext from "./hooks/context";



export default function Index() {
  const { authentication, userPersonalData } = useContext(AuthContext)
  console.log("CHANGE FROM FALSE to", authentication)
  console.log("USER-PERSONAL DATA", userPersonalData)

  return (
    <SafeAreaView style={{flex: 1}}>
      {!authentication && <View style={{flex: 1}}>
        <Login />
      </View>}
      {authentication && <View>
        <DashBoard /> 
      </View>}
    </SafeAreaView>
  );
}
