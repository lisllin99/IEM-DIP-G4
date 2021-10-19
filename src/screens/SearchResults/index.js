import React from "react";
// import {View, Text, Dimensions} from 'react-native';
import RouteMap from "../../components/RouteMap";
import PeopleTypes from "../../components/PeopleTypes";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles.js"
import {useRoute} from '@react-navigation/native';
// import CreateGroup from "../../components/CreateGroup/createGroup";
import AllInvitees from "../../components/AllInvitees/AllInvitees";

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
  // import { AntDesign } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  // import { MaterialCommunityIcons } from "@expo/vector-icons";


const SearchResults = (props) => {

// class SearchResults extends React.Component {


    const route = useRoute();
    console.log(route.params);
    
    const {originPlace, destinationPlace} = route.params

    return (
        
        <View style={{display: 'flex', justifyContent:'space-between'}}>
                {/*Input Box */}
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Gek Poh Shopping Centre</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name={"clockcircle"} size={16} color={"#fff"} />
                        <Text style={{fontWeight: "300", color: "#fff", marginRight: 10,}}>15min</Text>
                    </View>
                </View>

            <View style={{height: Dimensions.get('window').height - 400}}>
               <RouteMap origin ={originPlace} destination={destinationPlace}/>
            </View>
            
            
            <View style = {{height:500, backgroundColor:'#fff'}}>
                <AllInvitees/>
            </View>
        </View>
    );
};
// };

export default SearchResults;