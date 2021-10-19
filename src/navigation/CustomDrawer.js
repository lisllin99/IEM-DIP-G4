import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
//import {Auth} from 'aws-amplify'; // sign out library

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#8CA0D7', padding: 15}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: '#cacaca',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}>

          <Image 
          source={require("../assets/images/100.jpeg")}
          style = {{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}/>
          </View>

          <View>
            <Text style={{color: 'white', fontSize: 24}}>John</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#fff',
          paddingVertical: 5,
          marginVertical: 10,
        }}>
          <Pressable
            onPress={() => {console.warn('Messages')}}>
            <Text style={{color: '#fff', paddingVertical: 5, fontWeight: "600",}}>Hi, John!</Text>
          </Pressable>
        </View>


      </View>

      <DrawerItemList {...props} />

      {/* Make money */}
      <Pressable onPress={() => { Auth.signOut() }}>
        <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;