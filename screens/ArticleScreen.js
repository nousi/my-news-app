import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default ArticleScreen = () => {
  return (
    <SafeAreaView>
      <WebView source={{ uri: "https://expo.io" }} style={{ marginTop: 20 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
