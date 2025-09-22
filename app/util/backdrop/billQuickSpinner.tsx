import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";


export default function BillQuickLoader() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]} />
      <Text style={styles.text}>BillQuick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 6,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    // shadowOpacity: 0.2,
    // shadowOffset: { width: 1, height: 1 },
    borderColor: "purple",
    borderTopColor: "transparent",
  },
  text: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "purple"
  },
});
