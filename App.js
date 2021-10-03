import React, { useEffect } from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import 'react-native-gesture-handler';
//import Geolocation from '@react-native-community/geolocation';
//import SearchResults from './src/screens/SearchResults';

// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';

import RootNavigator from './src/navigation/Root.js'


const App : () => React$Node = () =>  {

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
    <RootNavigator />
    </>
  );
};

export default App;