import { useContext } from "react";
import { View } from "react-native";

import DashBoard from './dashboard/dashboard';
import AuthContext from "./hooks/context";
import Login from "./login";
import ContextProvider from "./hooks/contextProvider";


export default function Index() {
  const { authentication } = useContext(AuthContext)

  return (
    <ContextProvider>
      <View>
        {authentication && <Login />}
        <DashBoard /> 
      </View>
    </ContextProvider>
  );
}
