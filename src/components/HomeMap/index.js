import React from "react";
import {View, Text, Image} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = (props) => {
    return(
 
        <MapView
        style = {{height: '100%', width: '100%'}}
        provider = {PROVIDER_GOOGLE}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        >
        <Marker
            coordinate = {{latitude: 37.78825, longitude:-122.4324}}
        >
            <Image
            style = {{width:20, height:20, resizeMode:'contain'}}
            source = {require('../../assets/images/Avatar-Icon.jpeg')}/>
        </Marker>
        </MapView>
        
    );
};

export default HomeMap;