import React, { useEffect } from 'react';
import {StatusBar, PermissionsAndroid, Platform, View} from 'react-native';
import 'react-native-gesture-handler';

// for amplify imports
import { withAuthenticator } from 'aws-amplify-react-native'
import RootNavigator from './src/navigation/Root.js'
import AppNavigator from './src/navigation/AppNavigator.js';

// amplify imports
import Amplify from 'aws-amplify'
import config from './src/aws-exports' //reference to correct file path
Amplify.configure(config)

import SplashScreen from './src/screens/SplashScreen/SplashScreen.js';

const App : () => React$Node = () =>  {
//export default class App extends React.Component {

  const androidPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "BusMeet Location Permission",
          message:
            "BusMeet App needs access to your location " +
            "so you can meet your friends!.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }


  useEffect (create = () => {
     androidPermission();
  }, {inputs:[]})


  


  
  return (
    
    <>
    <StatusBar barStyle = "dark-content" />
    <RootNavigator/>
    </>
  );

  
};

export default /*App*/ withAuthenticator(App);