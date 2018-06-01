import React, { Component } from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";

import Slides from "../components/Slides";

const SLIDES_DATA = [
  { text: "Welcome to the Job App", color: "#f39c12" },
  { text: "Use this App to get a Job", color: "#e67e22" },
  { text: "Set your location, then Swipe away", color: "#d35400" }
];

class WelcomeScreen extends Component {
  componentWillMount() {
    let token = "";
    setTimeout(() => {
      token = AsyncStorage.getItem("fb_token");
      if (token) {
        
        this.props.navigation.navigate("Map");

      } else {
        this.setState({ token: false });
      }
    }, 1000);
  }
  state = { token: null };
  onwardsButton = () => {
    return this.props.navigation.navigate("Auth");
  };
  render() {
    if (!this.state.token) {
      return (
        <View
          style={{
            backgroundColor: "#2e86de",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator color="white" size={50} />
        </View>
      );
    }
    return <Slides slides={SLIDES_DATA} onwards={this.onwardsButton} />;
  }
}

export default WelcomeScreen;
