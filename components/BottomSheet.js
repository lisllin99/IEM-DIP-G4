import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");


const BottomSheet = (props) => {

    const [alignment] = useState(new Animated.Value(0));

    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500
        }).start();
    };

    const hideActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500
        }).start();
    };

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 2.4 + 50, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    };

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
            <Text>Area to put Participants and Chat</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: height / 2.4,
        width: width / 1.05,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginHorizontal: 10,
    },
    grabber: {
        width: 100,
        borderTopWidth: 5,
        borderTopColor: '#aaa',
        marginLeft: "auto",
        marginRight: "auto",
    },
});

export default BottomSheet;

