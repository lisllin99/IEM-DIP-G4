import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './styles.js';

const PeopleTypeRow = (props) => {

    return (
       <View style = {styles.container}>
           {/*Image */}
           <Image style = {styles.image} source = {require('../../assets/images/Avatar-Icon.jpeg')} />

           <View style = {styles.middleContainer}>
                <Text style={styles.type}>Sandy</Text>
                <Text style={styles.stop}>Next Stop: Yunan Garden</Text>
           </View>

           <View style = {styles.rightContainer}>
                <Text style = {styles.time}> 3 mins</Text>
           </View>
       </View>
    );
};

export default PeopleTypeRow;