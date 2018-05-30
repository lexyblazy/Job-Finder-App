import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from "./screens/MainScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default class App extends Component {
  render() {
    const routeConfig = {
      Auth: { screen: AuthScreen },
      Welcome: { screen: WelcomeScreen },
      Main: {
        screen: createMaterialTopTabNavigator({
          Map: { screen: MapScreen },
          Deck: { screen: DeckScreen },
          Review: {
            screen: createStackNavigator({
              Review: {
                screen: ReviewScreen,
                navigationOptions: ({ navigation }) => ({
                  title: "Review Jobs",
                  headerRight: (
                    <Button
                      title="Settings"
                      onPress={() => navigation.navigate("Settings")}
                      backgroundColor="rgba(0,0,0,0)"
                      color="rgba(0, 122, 255, 1)"
                    />
                  ),
                  style: {
                    marginTop: Platform.OS === "android" ? 24 : 0
                  }
                })
              },
              Settings: { screen: SettingsScreen }
            })
          }
        })
      }
    };

    const MainNavigator = createMaterialTopTabNavigator(routeConfig);
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
