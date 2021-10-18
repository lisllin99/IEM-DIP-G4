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
  Modal,
  Picker,
  Alert,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from 'moment';

class Addfriend extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
      isDatePickerVisible: "",
      isTimePickerVisible: "",
      modalVisible: false,
      users: [
        {
          userProfile: require("../../assets/images/100.jpeg"),
          userName: "Ben",
          selected: false,
        },
        {
          userProfile: require("../../assets/images/4.jpeg"),
          userName: "Cruella",
          selected: false,
        },
        {
          userProfile: require("../../assets/images/39.jpeg"),
          userName: "Kate",
          selected: false,
        },
        {
          userProfile: require("../../assets/images/149.jpeg"),
          userName: "Ryuk",
          selected: false,
        },
        {
          userProfile: require("../../assets/images/76.jpeg"),
          userName: "Sally",
          selected: false,
        },
      ],

      // chosenDate: ""
    };
  }

  showDatePicker = (datetime) => {
    this.setState({ isDatePickerVisible: true });
    //  , chosenDate: moment(datetime).format('MMMM DD, YYYY')
  };

  hideDatePicker = (datetime) => {
    this.setState({ isDatePickerVisible: false });
  };

  showTimePicker = (datetime) => {
    this.setState({ isTimePickerVisible: true });
    //  , chosenDate: moment(datetime).format('MMMM DD, YYYY')
  };

  hideTimeePicker = (datetime) => {
    this.setState({ isTimePickerVisible: false });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  render() {
    let { isDatePickerVisible, isTimePickerVisible, modalVisible, users } =
      this.state;

    console.log(this.props);

    return (
      
      <View style={styles.container}>
        <StatusBar backgroundColor="#f6f5f5" style="dark" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          
    
          
          
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ modalVisible: false });
          }}
        >
          {/* <TouchableOpacity
            style={{ marginVertical: 5 }}
            onPress={() => this.setState({ modalVisible: false })}
          > */}
          <TouchableOpacity
            style={{
              ...styles.openButton,
              backgroundColor: "#fff",
            }}
            onPress={() => this.setState({ modalVisible: false })}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity onPress={this.showDatePicker}>
                <Text style={{ fontWeight: "bold" }}>09 Sep 2021</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showTimePicker}>
                <Text style={{ fontWeight: "bold" }}>16: 30</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
        </Modal>

        <View style={styles.searchSection}>
          
          
          <Ionicons
            style={{ position: "absolute", left: 70 }}
            name="time"
            size={24}
            color="#8CA0D7"
          />
          {/* onPress={this.showDatePicker} */}
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: !modalVisible })}
          >
            <TextInput placeholder="Select Date & Time" style={styles.input} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
        </View>
        {/* <Text>
        {this.state.chosenDate}
      </Text> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {users.map((val, i) => {
            if (val.selected) {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                  onPress={() => {
                    users[i].selected = !users[i].selected;
                    this.setState({ users: users });
                  }}
                >
                  <Image
                    source={users[i].userProfile}
                    style={styles.profilerowImg}
                  />
                  <Text style={{ marginLeft: -80, marginTop: 35 }}>
                    {val.userName}
                  </Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        <View style={styles.searchSection2}>
          <Ionicons
            style={{ position: "absolute", left: 20 }}
            name="search"
            size={24}
            color="gray"
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {users.map((val, i) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderBottomColor: "gray",
                  marginTop: 30,
                }}
                onPress={() => {
                  users[i].selected = !users[i].selected;
                  this.setState({ users: users });
                }}
              >
                <Image
                  source={users[i].userProfile}
                  style={styles.profilerowImg}
                />
                <Text style={styles.imgTitle}>{val.userName}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: -720,
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
  profilerowImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: -20,
    marginHorizontal: 30,
  },
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
    paddingLeft: 30,
    alignSelf: "center",
    borderColor: "#8CA0D7",
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  searchInput: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
    paddingLeft: 40,
    alignSelf: "center",
    backgroundColor: "#DADADA",
    zIndex: -1,
    borderColor: "#FFFFFF",
  },
  searchSection: {
    marginTop: -15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchSection2: {
    marginVertical: 40,
    borderTopColor: "black",
    borderTopWidth: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imgTitle: {
    marginTop: -35,
    fontSize: 18,
    fontWeight: "bold",
  },
  openButton: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 30,
    top: 200,
    position: "absolute",
    height: 120,
  },
});

export default Addfriend;

