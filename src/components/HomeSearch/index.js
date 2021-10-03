import React from "react";
import {View, Text, Pressable} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

import styles from './styles.js';

const HomeSearch = (props) => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('DestinationSearch')
    }

    return(
       <View>
           {/*Input Box */}
           <Pressable onPress={goToSearch} style={styles.inputBox}>
               <Text style={styles.inputText}>Meet Where?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={"clockcircle"} size={16} color={"#fff"} />
                    <Text style={{fontWeight: "300", color: "#fff"}}>Now</Text>
                    <MaterialIcons name = {'keyboard-arrow-down'} size={16} />
                </View>
           </Pressable>

           {/*All members*/}
           <View style={styles.row}>
               <View style = {styles.iconContainer}>
               <MaterialCommunityIcons name={"face-profile"} size={16} color={"#fff"} />
               </View>
               <Text style = {styles.destinationText}>You</Text>
           </View>

           <View style={styles.row}>
               <View style = {styles.iconContainer}>
               <MaterialCommunityIcons name={"face-profile"} size={16} color={"#fff"} />
               </View>
               <Text style = {styles.destinationText}>Jerry</Text>
           </View>

           <View style={styles.row}>
               <View style = {styles.iconContainer}>
               <MaterialCommunityIcons name={"face-profile-woman"} size={16} color={"#fff"} />
               </View>
               <Text style = {styles.destinationText}>Sandy</Text>
           </View>

       </View>

    );
};

export default HomeSearch;