import React from "react";
import {View, Text, Dimensions, Pressable} from "react-native";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = (props) => {
    return (
        <View>
        <View style = {{height: Dimensions.get('window').height - 400}}>
            <HomeMap/>
        </View>

        { /* botom component */}
        <View>
            <HomeSearch/>
        </View>
        </View>
    );
};

export default HomeScreen;