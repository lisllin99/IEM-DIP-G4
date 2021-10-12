import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeScreen from "../screens/HomeScreen";


const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
            <Stack.Navigator
            screenOptions = {{
                headerShown: false,
            }}
            initialRouteName = {"HomeScreen"}
            >
             <Stack.Screen name = {"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name = {"SearchResults"} component={SearchResults} />
            <Stack.Screen name = {"DestinationSearch"} component={DestinationSearch} />
            </Stack.Navigator>
    );
};

export default HomeNavigator;