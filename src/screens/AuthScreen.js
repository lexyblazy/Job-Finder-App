import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { fbLogin } from "../actions/auth_actions";

class AuthScreen extends Component {
  componentDidMount(){
    this.props.fbLogin();
  }
  render() {
    return <View />;
  }
}

export default connect(null, { fbLogin })(AuthScreen);
