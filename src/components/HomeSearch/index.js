import React from "react";
import {View, Text, Pressable,TouchableOpacity} from "react-native";
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
          <View style={styles.cardView}>
            <Text style={{fontSize: 11}}>Start by tapping on the Add Friends + button below.</Text>
            <TouchableOpacity style={styles.cardBtn}>
              <Text style={{color: "#fff"}}>Add Friends +</Text>
            </TouchableOpacity>
          </View>
       </View>

    );
};


export default HomeSearch;