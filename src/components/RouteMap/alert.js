import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

const Notification = () => {
  useEffect(() => {
    setTimeout(() => {
      Alert.alert('You have reached your destination!', 'Wait for your friends!');
    }, 30000);
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>.</Text>
    </View>
  );
};

export default Notification;