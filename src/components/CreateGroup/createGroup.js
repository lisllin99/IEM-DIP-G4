import React from "react";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import PeopleTypeRow from "../PeopleTypeRow";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PeopleTypes from "../PeopleTypes";

class CreateGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
    };
  }
  handleCustomIndexSelect = (index) => {
    this.setState((prevState) => ({ ...prevState, customStyleIndex: index }));
  };
  render() {
    const { selectedIndex, selectedIndices, customStyleIndex, cardDatails } =
      this.state;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f6f5f5" style="dark" />
  
   
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            
          <TouchableOpacity
            onPress={() => this.setState({ customStyleIndex: 0 })}
            style={[
              styles.tabBtn,
              customStyleIndex === 0
                ? { backgroundColor: "#8ca0d7" }
                : { backgroundColor: "#fff" },
            ]}
          >
            <Entypo
              style={[
                customStyleIndex === 0 ? { color: "#fff" } : { color: "black" },
              ]}
              name="location-pin"
              size={25}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ customStyleIndex: 1 })}
            style={[
              styles.tabBtn,
              customStyleIndex === 1
                ? { backgroundColor: "#8ca0d7" }
                : { backgroundColor: "#fff" },
            ]}
          >
            <MaterialCommunityIcons   style={[
                customStyleIndex === 1
                  ? { color: "#fff" }
                  : { color: "black" },
              ]} name="facebook-messenger" size={25} color="black" />
          </TouchableOpacity>

   
        </View>


        {customStyleIndex === 0 && (
          <View style={styles.cardView}>
              <PeopleTypeRow />
              <PeopleTypeRow />
              <PeopleTypeRow />

          </View>
        )}


        {customStyleIndex === 1 && (
          <View>
            <Text>Chat!</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginVertical: 30,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  headerImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  map: {
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height - 500,
    alignSelf: "center",
  },
  notifationView: {
    position: "absolute",
    top: 180,
    left: 355,
  },
  notifationIcon: {
    width: 50,
    height: 50,
  },
  notifationView2: {
    position: "absolute",
    top: 235,
    left: 360,
  },
  notifationIcon2: {
    width: 30,
    height: 35,
  },
  tabBtn: {
    width: 190,
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    elevation: 8,
    marginVertical: 20,
  },
  cardView: {
    width: 380,
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    marginTop: -19,
    elevation: 5,
    backgroundColor: "#fff",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingTop: 10,
  },
  cardBtn: {
    padding: 8,
    backgroundColor: "#8ca0d7",
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
    marginTop: 60
  }
});

export default CreateGroup;
