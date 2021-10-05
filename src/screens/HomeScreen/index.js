import React from "react";
import {View, Text, Dimensions, Pressable, StyleSheet, TouchableOpacity, Image} from "react-native";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = (props) => {
    return (
        <View>
        <View style = {{height: Dimensions.get('window').height - 400}}>
            <HomeMap/>

            <TouchableOpacity style={styles.notifationView}>
          <Image
            source={require("../../assets/images/Picture91.png")}
            style={styles.notifationIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notifationView2}>
          <Image
            source={require("../../assets/images/Picture92.png")}
            style={styles.notifationIcon2}
          />
        </TouchableOpacity>
        </View>

        { /* botom component */}
        <View>
            <HomeSearch/>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    notifationView: {
        position: "absolute",
        top: 80,
        left: 355,
      },
      notifationIcon: {
        width: 50,
        height: 50,
      },
      notifationView2: {
        position: "absolute",
        top: 140,
        left: 360,
      },
      notifationIcon2: {
        width: 30,
        height: 35,
      },
});

export default HomeScreen;