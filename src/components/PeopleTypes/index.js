import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import PeopleTypeRow from '../PeopleTypeRow/index.js';
import styles from './styles.js';

const PeopleTypes = (props) => {

    return (
       <View>
           <PeopleTypeRow/>
           <PeopleTypeRow />
           <PeopleTypeRow />   
       </View>
    );
};

export default PeopleTypes;