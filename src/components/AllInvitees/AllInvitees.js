import React from "react";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import { GiftedChat } from "react-native-gifted-chat";

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
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MessageChat from "./../../components/messageChat/messageChat";

class AllInvitees extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
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
      modalVisible3,
    } = this.state;

    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f6f5f5" style="dark" />
        
        {/*
        <View style={styles.header}>
          <Text style={styles.title}>Meet-Up</Text>
          <Image
            source={require("../../assets/images/39.jpeg")}
            style={styles.headerImg}
          />
        </View>
        */}

        {/*
        <TouchableOpacity
          style={styles.locationView}
          onPress={() => this.setState({ modalVisible3: !modalVisible3 })}
        >
          <View style={{ flexDirection: "row" }}>
            <Entypo name="location-pin" size={24} color="white" />
            <Text style={{ color: "white" }}>NTU South Spine</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time" size={22} color="white" />
            <Text style={{ color: "white" }}>16:30</Text>
          </View>
        </TouchableOpacity>
        */}

         {/*
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
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
            <View
              style={{
                borderWidth: 2,
                width: 220,
                alignSelf: "center",
                borderRadius: 30,
                marginVertical: 15,
              }}
            >
              <View style={styles.searchSection}>
                <Entypo
                  style={{ position: "absolute", left: 10, marginVertical: 3 }}
                  name="location-pin"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholder="NTU South Spine"
                  style={styles.inputPopus}
                />
              </View>
            </View>

            <View
              style={{
                borderWidth: 2,
                width: 220,
                alignSelf: "center",
                borderRadius: 30,
              }}
            >
              <View style={styles.searchSection}>
                <Entypo
                  style={{ position: "absolute", left: 10, marginVertical: 3 }}
                  name="location-pin"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholder="NTU South Spine"
                  style={styles.inputPopus}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.transferBtn}>
              <Text style={{ color: "white" }}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginVertical: 5 }}
              onPress={() => this.setState({ modalVisible3: false })}
            >
              <Image
                source={require("../../assets/images/remove.png")}
                style={styles.removeImg}
              />
            </TouchableOpacity>
          </View>
        </Modal>

        */}
       
       {/*
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Friends")}>
        <MapView style={styles.map} />
        </TouchableOpacity>
       */}

       {/*
        <TouchableOpacity
          style={styles.notifationView}
          onPress={() => this.setState({ modalVisible: !modalVisible })}
        >
          <Image
            source={require("../../assets/images/Picture91.png")}
            style={styles.notifationIcon}
          />
        </TouchableOpacity>
       

        <TouchableOpacity
          style={styles.notifationView2}
          onPress={() => this.setState({ modalVisible2: !modalVisible2 })}
        >
          <Image
            source={require("../../assets/images/Picture92.png")}
            style={styles.notifationIcon2}
          />
        </TouchableOpacity>

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
            <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
              Lenny is inviting you to a Meet-Up!
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "center",
              }}
            >
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={{ fontWeight: "bold", marginHorizontal: 5 }}>
                location
              </Text>
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#2E3A4E",
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: "white" }}>NTU South Spine</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Ionicons name="time" size={24} color="black" />
              <Text style={{ fontWeight: "bold", marginHorizontal: 5 }}>
                Meet-Up Time
              </Text>
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#2E3A4E",
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
              }}
            >
              <Picker
                style={{
                  height: 35,
                  width: 100,
                  alignSelf: "center",
                  borderWidth: 2,
                }}
              >
                <Picker.Item label="155" value="155" />
                <Picker.Item label="179" value="179" />
                <Picker.Item label="6718" value="6718" />
                <Picker.Item label="20" value="20" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.boardBtn}>
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
                marginVertical: 15,
              }}
            >
              <Picker
                style={{
                  height: 35,
                  width: 100,
                  alignSelf: "center",
                  borderWidth: 2,
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
                style={styles.removeImg}
              />
            </TouchableOpacity>
          </View>
        </Modal>

              */}

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
            <MaterialCommunityIcons
              style={[
                customStyleIndex === 1 ? { color: "#fff" } : { color: "black" },
              ]}
              name="facebook-messenger"
              size={25}
              color="black"
            />
          </TouchableOpacity>
        </View>

        {customStyleIndex === 0 && (
          <View style={styles.cardView}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignSelf: "flex-start" }}
            >
              <Image
                source={require("../../assets/images/100.jpeg")}
                style={styles.headerImg}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 10,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>You</Text>
                <Text style={{ fontSize: 10 }}>Next Stop: Yunnan Garden (641221)</Text>
              </View>
              <View style={{width: 70, padding: 3, backgroundColor: "#C90B0B", alignItems: "center", alignSelf:"flex-end", marginHorizontal: 10, borderRadius: 10, marginBottom: 20,}}>
              <Text style={{color: "white"}}>5 min</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../assets/images/39.jpeg")}
                style={styles.headerImg}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 10,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cruella</Text>
                <Text style={{ fontSize: 12 }}>Next Stop: Hall 4</Text>
              </View>
              <View style={{width: 70, padding: 3, backgroundColor: "#117639", alignItems: "center", alignSelf:"flex-end", marginHorizontal: 90, borderRadius: 10, marginBottom: 20,}}>
              <Text style={{color: "white"}}>3 min</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row", alignSelf: "flex-start" }}
            >
              <Image
                source={require("../../assets/images/76.jpeg")}
                style={styles.headerImg}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 10,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Kate</Text>
                <Text style={{ fontSize: 12 }}>Next Stop: -</Text>
              </View>
              <View style={{width: 70, padding: 3, backgroundColor: "#117639", alignItems: "center", alignSelf:"flex-end", marginHorizontal: 120, borderRadius: 10, marginBottom: 20,}}>
              <Text style={{color: "white"}}>0 min</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cardBtn}
              onPress={() => this.props.navigation.navigate("CreateGroup")}
            >
              <Text style={{ color: "#fff" }}>Add Friends</Text>
            </TouchableOpacity>
          </View>
        )}
      <View style = {{zIndex: 1,}}>
        {customStyleIndex === 1 && <MessageChat />}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -100
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
  removeImg: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  map: {
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height - 535,
    alignSelf: "center",
  },
  notifationView: {
    position: "absolute",
    top: 225,
    left: 355,
  },
  notifationIcon: {
    width: 50,
    height: 50,
  },
  notifationView2: {
    position: "absolute",
    top: 285,
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
    marginVertical: 10,
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
    paddingTop: 20,
  },
  cardBtn: {
    padding: 8,
    backgroundColor: "#8ca0d7",
    borderRadius: 20,
    width: 120,
    alignItems: "center",
    marginTop: 20,
  },
  openButton: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 30,
    top: "25%",
    position: "absolute",
    height: 170,
  },
  openButton2: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 30,
    top: "15%",
    position: "absolute",
    height: 230,
  },
  transferBtn: {
    padding: 8,
    backgroundColor: "#8CA0D7",
    width: 80,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  boardBtn: {
    padding: 6,
    width: 70,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#2E3A4E",
    borderRadius: 5,
  },
  locationView: {
    width: 250,
    padding: 5,
    marginTop: -30,
    backgroundColor: "#8CA0D7",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  inputPopus: {
    marginLeft: 35,
    padding: 2,
  },
});

export default AllInvitees;
