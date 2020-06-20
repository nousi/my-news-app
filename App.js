import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import dummyarticles from "./dummies/articles";
import Constants from "expo-constants";
import axios from "axios";
import HomeScreen from "./screens/HomeScreen";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function App() {
  return (
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
