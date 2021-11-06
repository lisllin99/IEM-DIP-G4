import React from "react";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

class BusStop extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
      modalVisible: false,
      modalVisible2: false,
    };
  }
  handleCustomIndexSelect = (index) => {
    this.setState((prevState) => ({ ...prevState, customStyleIndex: index }));
  };
  render() {

    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f6f5f5" style="dark" />
        <MapView style={styles.map} />
        <TouchableOpacity
          style={styles.CardBox}
          onPress={() => this.props.navigation.navigate("BusStop")}
        >
          <View style={{ flexDirection: "column", marginHorizontal: 20, }}>

            <Text
              style={{ top: 15, marginLeft: 10, fontWeight: "bold", fontSize: 30, }}
            >
              179
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 30,
                  marginTop: 16,
                  marginVertical: 2,
                  color: "gray",
                }}
              >
                Boon lay Int
              </Text>
              <View style={{ flexDirection: "column", marginTop: -30 }}>
                <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                  Arr
                </Text>
                <Image
                  source={require("../../assets/images/bus.png")}
                  style={{ marginHorizontal: 30 }}
                />
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 2,
                    color: "gray",
                  }}
                >
                  Double
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginTop: -30 }}>
                <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                  3min
                </Text>
                <Image
                  source={require("../../assets/images/bus.png")}
                  style={{ marginHorizontal: 30 }}
                />
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 2,
                    color: "gray",
                  }}
                >
                  Double
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginTop: -30 }}>
                <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                  9min
                </Text>
                <Image
                  source={require("../../assets/images/bus.png")}
                  style={{ marginHorizontal: 30 }}
                />
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 2,
                    color: "gray",
                  }}
                >
                  Double
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ marginHorizontal: 10 }}>Weekdays</Text>
              <Text style={{ marginHorizontal: 10 }}>Weekdays</Text>
              <Text style={{ marginHorizontal: 10 }}>Weekdays</Text>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <Text style={{ marginHorizontal: 20, fontWeight: "bold" }}>
                First Bus
              </Text>
              <Text style={{ marginHorizontal: 20 }}>0600</Text>
              <Text style={{ marginHorizontal: 20 }}>0600</Text>
              <Text style={{ marginHorizontal: 20 }}>0630</Text>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <Text style={{ marginHorizontal: 20, fontWeight: "bold" }}>
                Last Bus
              </Text>
              <Text style={{ marginHorizontal: 20 }}>2400</Text>
              <Text style={{ marginHorizontal: 20 }}>2400</Text>
              <Text style={{ marginHorizontal: 20 }}>0020</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => this.props.navigation.navigate("BusTimings")}
        >
          <Image
            source={require("../../assets/images/remove.png")}
            style={{ marginVertical: 20, width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -100,
  },

  map: {
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height - 300,
    alignSelf: "center",
  },

  CardBox: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    borderRadius: 8,
    padding: 15,
    elevation: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
});

export default BusStop;
