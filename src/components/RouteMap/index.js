import React from "react";
import {View, Text, Image} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAPiR_7iMHp27BKbIq1o70EkpyU36YGpjE'

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
      };
    
      const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
      };

    /*const origin = {
        latitude: 1.3493957438584392,
        longitude: 103.69615309937721,
    };

    const destination = {
        latitude: 1.3504093374659165,
        longitude: 103.69852417197175
    }*/
    
    return(
 
        <MapView
        style = {{height: '100%', width: '100%'}}
        provider = {PROVIDER_GOOGLE}
        showsUserLocation = {true}
        initialRegion={{
        latitude: 1.3493957438584392,
        longitude: 103.69615309937721,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        }}
        >
        <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth = {2}
        strokeColor = "black"
        />
        <Marker
            coordinate={originLoc}
            title={'Origin'}
        >
            <Image
            style = {{width:20, height:20, resizeMode:'contain'}}
            source = {require('../../assets/images/Avatar-Icon.jpeg')}/>
        </Marker>

        <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />
        </MapView>
        
    );
};

export default RouteMap;