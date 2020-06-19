import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import dummyarticles from "./dummies/articles";
import Constants from "expo-constants";
import axios from "axios";

const URL = `https://newsapi.org/v2/top-headlines？country=jp＆apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyarticles);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
