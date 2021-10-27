import React from "react";
import {createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import RootNavigator from "./Root";

const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  RootNavigator: {
    screen: RootNavigator
  }
});

export default createAppContainer(AppNavigator);