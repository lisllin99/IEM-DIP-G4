import React from "react";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import styles from "./styles.js"

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";

import { Picker } from '@react-native-picker/picker';

// import icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// const HomeScreen = (props) => {

class HomeScreen extends React.Component {

  // Constructor and initialise variables
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
    const {
      selectedIndex,
      selectedIndices,
      customStyleIndex,
      cardDatails,
      modalVisible,
      modalVisible2,
    } = this.state;

    console.log(this.props);


    return (
      <View>
        <View style={{ height: Dimensions.get('window').height - 400 }}>
          <HomeMap />

          <TouchableOpacity
            style={styles.notificationView}
            onPress={() => this.setState({ modalVisible: !modalVisible })}
          >
            <Image
              source={require("../../assets/images/notificon-removebg-preview.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notificationView2}
            onPress={() => this.setState({ modalVisible2: !modalVisible2 })}
          >
            <Image
              source={require("../../assets/images/busicon-removebg-preview.png")}
              style={styles.notificationIcon2}
            />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >

          <View
            style={{
              ...styles.openButton2,
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 18, marginTop: 10, }}>
              Lenny is inviting you to a Meet-Up!
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                justifyContent: "center",
              }}
            >
              <Entypo name="location-pin" size={30} color="black" />
              <Text style={{ fontWeight: "bold", marginHorizontal: 10, marginTop: 6, }}>
                Location
              </Text>
              <View
                style={{
                  padding: 6,
                  backgroundColor: "#8CA0D7",
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: "white", margin: "auto", }}>NTU South Spine</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginRight: 40, }}>
              <Ionicons name="time" size={24} color="black" />
              <Text style={{ fontWeight: "bold", marginHorizontal: 10, marginTop: 5, }}>
                Meet-Up Time
              </Text>
              <View
                style={{
                  padding: 6,
                  backgroundColor: "#8CA0D7",
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: "white" }}>16:30</Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 2,
                width: 220,
                alignSelf: "center",
                borderRadius: 30,
                marginVertical: 15,
                borderColor: "#8CA0D7",
              }}
            >
              <Picker
                style={{
                  height: 35,
                  width: 100,
                  alignSelf: "center",
                  borderWidth: 2,
                  borderColor: "#fff",
                  backgroundColor: "#ebebeb",
                }}
              >
                <Picker.Item label="155" value="155" />
                <Picker.Item label="179" value="179" />
                <Picker.Item label="193" value="193" />
                <Picker.Item label="20" value="20" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.boardBtn} onPress={() => this.props.navigation.navigate("AllInvitees")}>
              <Text style={{ color: "white" }}>Board</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginVertical: 5 }}
              onPress={() => this.setState({ modalVisible: false })}
            >
              <Image
                source={require("../../assets/images/remove.png")}
                style={styles.removeImg}
              />
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              ...styles.openButton,
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
              Bus Transfer
            </Text>
            <View
              style={{
                borderWidth: 2,
                width: 220,
                alignSelf: "center",
                borderRadius: 30,
                borderColor: "#8CA0D7",
                marginVertical: 15,
              }}
            >
              <Picker
                style={{
                  height: 35,
                  width: 100,
                  alignSelf: "center",
                  borderWidth: 2,
                  borderColor: "#fff",
                  backgroundColor: "#ebebeb",
                }}
              >
                <Picker.Item label="155" value="155" />
                <Picker.Item label="179" value="179" />
                <Picker.Item label="6718" value="6718" />
                <Picker.Item label="20" value="20" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.transferBtn}>
              <Text style={{ color: "white" }}>Transfer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginVertical: 5 }}
              onPress={() => this.setState({ modalVisible2: false })}
            >
              <Image
                source={require("../../assets/images/remove.png")}
                style={styles.removeImg2}
              />
            </TouchableOpacity>
          </View>
        </Modal>


        { /* botom component */}
        <View>
          <HomeSearch />
        </View>
      </View>
    );
  };

};

export default HomeScreen;