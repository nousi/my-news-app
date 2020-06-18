import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./components/ListItem";
import articles from "./dummies/articles";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            text={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
