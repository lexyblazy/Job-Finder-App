import { FB_LOGIN_SUCCESS, FB_LOGIN_FAILURE } from "./types";
import { AsyncStorage } from "react-native";
import { LoginManager, AccessToken } from "react-native-fbsdk";

export const fbLogin = () => async dispatch => {
  const fb_token = await AsyncStorage.getItem("fb_token");
  if (fb_token) {
    dispatch({
      type: FB_LOGIN_SUCCESS,
      payload: fb_token
    });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  try {
    let result = await LoginManager.logInWithReadPermissions([
      "public_profile"
    ]);
    if (result.isCancelled) {
      alert("Login was cancelled");
    } else {
      const { accessToken } = await AccessToken.getCurrentAccessToken();
      await AsyncStorage.setItem("fb_token", accessToken);
      dispatch({
        type: FB_LOGIN_SUCCESS,
        payload: accessToken
      });
    }
  } catch (error) {
    alert("Login failed with error: " + error);
  }
};
