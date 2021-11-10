import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import NearbyNavigator from "./NearbyNavigator";
import messageChat from "../components/messageChat/messageChat"

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Chat" component={messageChat} />
        <Drawer.Screen name="Nearby" component={NearbyNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};

export default RootNavigator;