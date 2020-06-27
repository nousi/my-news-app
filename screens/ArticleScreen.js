import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { addClip } from "../store/actions/user";

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { clips } = user;
  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
