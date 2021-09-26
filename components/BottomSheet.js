import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("screen");

function RoomScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Room with users</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chat Box</Text>
        </View>
    );
}

const BottomSheet = (props) => {

    // the bottom sheet will come up and go down base on the alignment value
    const [alignment] = useState(new Animated.Value(0));

    // function to change alignment value to 1 in 5ms
    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500
        }).start();
    };


    // function to change alignment value to 0 in 5ms
    const hideActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500
        }).start();
    };

    // sets position of the bottom sheet in accordance to the alignment values
    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 1.6 + 60, 0]
    });


    // sets vertical position of bottom sheet 
    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    };

    // function that calls two function to bring up or hide bottom sheet when user swipes up and down
    const gestureHandler = (e) => {
        if (e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
        else if (e.nativeEvent.contentOffset.y < 0) hideActionSheet();
    };



    return (
        <Animated.View style={[styles.container, actionSheetStyle]}>
            <View>
                <ScrollView
                    onScroll={(e) => gestureHandler(e)}
                    contentContainerStyle={styles.grabber}
                ></ScrollView>
            </View>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            position: "absolute",
                            bottom: height / 1.6 - 127,
                            backgroundColor: "#2E3A4E",
                        },
                        tabBarItemStyle: {
                            marginTop: 20,
                        },
                        tabBarActiveTintColor: "#fff",

                    }}
                >


                    <Tab.Screen name="Room" component={RoomScreen} />
                    <Tab.Screen name="Chat" component={ChatScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </Animated.View >



    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: height / 1.6,
        width: width / 1.05,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginHorizontal: 10,
    },
    grabber: {
        width: 50,
        borderTopWidth: 50,
        borderTopColor: '#aaa',
        marginLeft: "auto",
        marginRight: "auto",
    },
});

export default BottomSheet;

