import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ClipScreen from "../screens/ClipScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "記事一覧" }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ title: "記事" }}
      />
    </Stack.Navigator>
  );
};
const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ title: "保存した記事" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
