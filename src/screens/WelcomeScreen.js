import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from "../components/Slides";

const SLIDES_DATA = [
  { text: "Welcome to the Job App", color: "#f39c12" },
  { text: "Use this App to get a Job", color: "#e67e22" },
  { text: "Set your location, then Swipe away", color: "#d35400" }
];

class WelcomeScreen extends Component {
  onwardsButton = () =>{
    return this.props.navigation.navigate('Auth')
  }
  render() {
    return <Slides slides={SLIDES_DATA} onwards={this.onwardsButton}/>;
  }
}

export default WelcomeScreen;
