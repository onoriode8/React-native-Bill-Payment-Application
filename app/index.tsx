import { useContext } from "react";
import { Text, View } from "react-native";
// import { Link } from "expo-router";

import Login from "./login";
import AuthContext from "./hooks/context";
import DashBoard from './dashboard/dashboard'


export default function Index() {
  const { authentication } = useContext(AuthContext)
  return (
    <View>
      {authentication && <Login />}
      <DashBoard /> {/* page not rendering, check if the folder is well structured according to nextjs folder structured.*/}
    </View>
  );
}
