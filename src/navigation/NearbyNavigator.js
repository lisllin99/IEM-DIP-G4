import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Nearby from "../screens/Nearby/Nearby";
import BusTimings from "../screens/BusTimings/BusTimings";
import BusStop from "../screens/BusStops/BusStop";


const Stack = createStackNavigator();

const NearbyNavigator = (props) => {
    return (
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                }}
                initialRouteName = {"Nearby"}
                >
                <Stack.Screen name = {"Nearby"} component={Nearby} />
                <Stack.Screen name = {"BusTimings"} component={BusTimings} />
                <Stack.Screen name = {"BusStop"} component={BusStop} />
            </Stack.Navigator>
    );
};

export default NearbyNavigator;