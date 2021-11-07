import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeScreen from "../screens/HomeScreen";
//import messageChat from "../components/messageChat/messageChat"
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"SplashScreen"}
        >
            <Stack.Screen name={"SplashScreen"} component={SplashScreen} />
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"SearchResults"} component={SearchResults} />
            <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;