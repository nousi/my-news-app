import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
    </NavigationContainer>
  );
};
