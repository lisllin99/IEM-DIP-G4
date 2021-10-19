import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";

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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

class BusTimings extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
      isDatePickerVisible: "",
    };
  }

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  render() {
    let { isDatePickerVisible } = this.state;
    console.log(this.props);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#8CA0D7" style="dark" />
        <View style={styles.header}>
          <Text style={styles.title}>Nearby</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Opp. SPMS
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Innovation Centre
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Hall 7
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Opp. Innovation Centre
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Hall 7
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.CardBox}
            onPress={() => this.props.navigation.navigate("BusStop")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Yunnan Gdn
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              marginHorizontal: 20,
              padding: 10,
              backgroundColor: "#DCDADB",
              borderRadius: 20,
            }}
          >
            <Image
              source={require("../../assets/images/Vector2.png")}
              style={{ marginHorizontal: 5 }}
            />
            <Image
              source={require("../../assets/images/Vector3.png")}
              style={{ marginHorizontal: 5 }}
            />
            <Image
              source={require("../../assets/images/Vector4.png")}
              style={{ marginHorizontal: 5 }}
            />
          </View>
          <TouchableOpacity
            style={styles.CardBox}
            onPress={() => this.props.navigation.navigate("BusStop")}
          >
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                179
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  Boon lay Int
                </Text>
                <View style={{ flexDirection: "column", marginTop: -20 }}>
                  <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                    Arr
                  </Text>
                  <Image
                    source={require("../../assets/images/bus.png")}
                    style={{ marginHorizontal: 30 }}
                  />
                </View>

                <View style={{ flexDirection: "column", marginTop: -20 }}>
                  <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                    3min
                  </Text>
                  <Image
                    source={require("../../assets/images/bus.png")}
                    style={{ marginHorizontal: 30 }}
                  />
                </View>

                <View style={{ flexDirection: "column", marginTop: -20 }}>
                  <Text style={{ marginHorizontal: 25, marginVertical: 4 }}>
                    9min
                  </Text>
                  <Image
                    source={require("../../assets/images/bus.png")}
                    style={{ marginHorizontal: 30 }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                WKWSCI
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CardBox}>
            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../assets/images/Vector.png")} />
              <Text>102m</Text>
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Sch of Comm And Info
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginHorizontal: 10, marginVertical: 2 }}>
                  738009
                </Text>
                <Text style={{ marginHorizontal: 20, marginVertical: 2 }}>
                  NTU Campus
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -30,
  },
  header: {
    marginVertical: 30,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#8CA0D7",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
    color: "white",
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

export default BusTimings;
