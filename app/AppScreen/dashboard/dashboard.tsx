import { useContext } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Header from './header';
import Services from './service';
import Wallet from './wallet';

import AuthContext from "../../hooks/context";
import MoonBackground from "./moon-background";



export default function DashBoard() {
  const { backgroundColor, userPersonalData } = useContext(AuthContext)
  
  console.log("USER DATA FROM SERVER", userPersonalData)

  

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor ? "rgba(0, 0, 0, 0.9)" : "#fff"}}>
        <View style={style.veiwWrapper}>
          <MoonBackground />
          <View style={style.container}>
            <Header />
            <Wallet />
          </View>
          <Services />
          {/* <Footer /> */}
        </View>
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
   veiwWrapper: {
      marginLeft: 20,
      marginRight: 20,
      // backgroundColor: "#fff"
   },
   container: {
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 15,
      backgroundColor: "purple" //"#4CAF50" //"#17BEBB"
   },
})