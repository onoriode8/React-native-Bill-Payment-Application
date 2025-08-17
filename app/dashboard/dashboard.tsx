import { useContext } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";

import Footer from './footer';
import Header from './header';
import Services from './service';
import Wallet from './wallet';
import MoonBackground from "./moon-background";
import AuthContext from "../hooks/context";


export default function DashBoard() {
  const { backgroundColor } = useContext(AuthContext)
  // const [showBackgroundColor, setShowBackgroundColor] = useState<boolean>(true)
  //for background color either white or black.

  return (
    <SafeAreaView style={{backgroundColor: backgroundColor ? "rgba(0, 0, 0, 1)" : "#fff"}}>
      <View style={style.veiwWrapper}>
        <MoonBackground />
        <Header />
        <Wallet />
        <Services />
        {/* <Link href="/login">Navigate to login</Link>
        <Link href="/login">Navigate to login</Link>
        <Link href="/login">Navigate to login</Link>
        <Link href="/login">Navigate to login</Link>
        <Link href="/login">Navigate to login</Link> */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
   veiwWrapper: {
      marginLeft: 20,
      marginRight: 20,
      // backgroundColor: "#fff"
   }
})