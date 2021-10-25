import React, { useState, useEffect } from "react";
import {View, Text, Image} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {API, graphqlOperation} from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

const RouteMap = ({origin, destination}) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyD6Np0xgB6tUpxIhYmncnZYB9GNQ-WUGCE'

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(
              listUsers
            )
          )
            console.log(response);
          setUsers(response.data.listUsers.items);
        } catch (e) {
          console.error(e);
        }
      };
  
      fetchUsers();
    }, [])

    const getImage = (username) => {
        if (username === "ben") {
          return require('../../assets/images/39.jpeg');
        }
        if (username === "cruella") {
          return require('../../assets/images/100.jpeg');
        }
        return require('../../assets/images/76.jpeg');
      };
  

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
    
    return (
 
        <MapView
        style = {{height: '100%', width: '100%'}}
        provider = {PROVIDER_GOOGLE}
        showsUserLocation = {true}
        followsUserLocation = {true}
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
            style = {{width:40, height:40, resizeMode:'contain'}}
            source = {require('../../assets/images/39.jpeg')}/>
        </Marker>

        <Marker
        coordinate={destinationLoc}
        title={"Destination"}
        />
        
        {users.map((user) => (
        

        <Marker
          key={user.id}
          coordinate={{latitude: user.latitude, longitude: user.longitude}}
        >
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={getImage(user.username)}
          />


        </Marker>
        ))}


        </MapView>
        
    );
};

export default RouteMap;