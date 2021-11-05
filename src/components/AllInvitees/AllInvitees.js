import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
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
      customStyleIndex,
    } = this.state;

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
