import React from "react";
import {View, Text, Image} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = (props) => {
    return(
 
        <MapView
        style = {{height: '100%', width: '100%'}}
        provider = {PROVIDER_GOOGLE}
        initialRegion={{
        latitude: 1.3493957438584392,
        longitude: 103.69615309937721,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        }}
        >
        <Marker
            coordinate = {{latitude: 1.3493957438584392, longitude:103.69615309937721}}
        >
            <Image
            style = {{width:20, height:20, resizeMode:'contain'}}
            source = {require('../../assets/images/Avatar-Icon.jpeg')}/>
        </Marker>
        </MapView>
        
    );
};

export default HomeMap;