import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const Loading = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
