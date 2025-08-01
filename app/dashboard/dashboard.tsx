// import { useContext } from "react";
import { StyleSheet, View } from "react-native";
// import { Link } from "expo-router";

import Footer from './footer';
import Header from './header';
import Services from './service';
import Wallet from './wallet';


export default function DashBoard() {
  return (
    <View style={style.veiwWrapper}>
      <Header />
      <Wallet />
      <Services />
      <Footer />
    </View>
  );
}

const style = StyleSheet.create({
   veiwWrapper: {
      marginLeft: 20,
      marginRight: 20
   }
})