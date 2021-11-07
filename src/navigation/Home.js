import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen1 from "../screens/SplashScreen/SplashScreen";
import AllInvitees from "../components/AllInvitees/AllInvitees";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"SplashScreen"}
        >
            <Stack.Screen name={"SplashScreen"} component={SplashScreen1}/>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
            <Stack.Screen name={"SearchResults"} component={SearchResults} />
         </Stack.Navigator>
    );
};

export default HomeNavigator;