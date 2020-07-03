import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
