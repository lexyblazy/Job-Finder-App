import React, { Component } from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fbLogin } from "../actions/auth_actions";

class AuthScreen extends Component {
  async componentDidMount() {
    this.props.fbLogin();
    this.onAuthComplete(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }
  onAuthComplete = props => {
    if (props.Auth.token) {
      this.props.navigation.navigate("Main");
    }
  };
  render() {
    if (!this.props.Auth.token) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return <View />;
  }
}

const mapStateToProps = ({ Auth }) => ({ Auth });
export default connect(mapStateToProps, { fbLogin })(AuthScreen);
