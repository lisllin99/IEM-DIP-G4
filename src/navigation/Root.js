import React from "react";
import {View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeScreen from "../screens/HomeScreen";
import HomeNavigator from "./Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Nearby from "../screens/Nearby/Nearby";
import NearbyNavigator from "./NearbyNavigator";
//import App from "../screens/Chat/Chat";
import messageChat from "../components/messageChat/messageChat"
import SplashScreen from "../screens/SplashScreen/SplashScreen";


const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  )
  

const RootNavigator = (props) => {
    return (

        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={
                (props) => (
                  <CustomDrawer {...props} />)
              }
            >
                <Drawer.Screen name = "Home" component={HomeNavigator} />
                
               {/*
              <Drawer.Screen name="Chat">
                {() => <DummyScreen name={"Chat"} />}
            </Drawer.Screen>
               */}
               
                
                
                
                <Drawer.Screen name = "Chat"  component = {messageChat} />
                <Drawer.Screen name="Nearby" component = {NearbyNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
};

export default RootNavigator;