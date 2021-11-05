import React, { useState, useEffect, useRef} from "react";
import {Image, Dimensions, TouchableOpacity} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE, AnimatedRegion} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {API, graphqlOperation} from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

// import { locationPermission, getCurrentLocation} from "../GetLocation";

// constants to use
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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

      // starting point of tracking user location

      const mapRef = useRef()
      const markerRef = useRef()
  
      const [state, setState] = useState({
          curLoc: {
              latitude: 1.34849,
              longitude: 103.68316,
          },
          destinationCords: {
              latitude: 1.34890,
              longitude: 103.69752,
          },
          isLoading: false,
          coordinate: new AnimatedRegion({
              latitude: 1.34849,
              longitude: 103.68316,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
          }),
          time: 0,
          distance: 0,
  
      })
  
      const { curLoc, time, distance, destinationCords, isLoading, coordinate } = state
  
      /*
      useEffect(() => { 
          getLiveLocation()
      }, [])
      */
  

      const getLiveLocation1 = async () => {
            const latitude1 = 1.3554
            const longitude1 = 103.68808
            animate(latitude1, longitude1)
            setState({
                ...state,
                curLoc: { latitude1, longitude1 },
                coordinate: new AnimatedRegion({
                    latitude: latitude1,
                    longitude: longitude1,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                })

            })
    
    }

      const getLiveLocation2 = async () => {
        const latitude2 = 1.35567
        const longitude2 = 103.69690
        animate(latitude2, longitude2)
        setState({
            ...state,
            curLoc: { latitude2, longitude2 },
            coordinate: new AnimatedRegion({
                latitude: latitude2,
                longitude: longitude2,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            })

        })

  }

  const getLiveLocation = async () => {
    //const locPermissionDenied = await locationPermission()
    //if (locPermissionDenied) {
        // const { latitude, longitude } = await getCurrentLocation()
        // console.log("get live location after 4 second")
        const latitude = destination.details.geometry.location.lat
        const longitude = destination.details.geometry.location.lng
        animate(latitude,longitude)
        setState({
            ...state,
            curLoc: { latitude, longitude },
            coordinate: new AnimatedRegion({
                latitude: destination.details.geometry.location.lat,
                longitude: destination.details.geometry.location.lng,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            })

        })
   // }
  }

      useEffect(() => {
        getLiveLocation1();
        getLiveLocation2();
        getLiveLocation();
      }, []);
      /*
      useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation1();
        }, 1000);
        return () => clearInterval(interval)
      })

      
      useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation2()
        }, 1000);
        return () => clearInterval(interval)
      })
  
      useEffect(() => {
          const interval = setInterval(() => {
              getLiveLocation()
          }, 1000);
        return () => clearInterval(interval)
      })
      */
      
      

      
      /*
      const onPressLocation = () => {
          navigation.navigate('chooseLocation', { getCordinates: fetchValue })
      }
      */

      /*
      const fetchValue = () => {
          //console.log("this is data", data)
          setState({
              ...state,
              destinationCords : destinationLoc,
              
              destinationCords: {
                  latitude: data.destinationCords.latitude,
                  longitude: data.destinationCords.longitude,
              },
              
          })
      }
      
      useEffect(() => { 
        fetchValue()
    }, [])
*/

      const animate = (latitude, longitude) => {
          const newCoordinate = { latitude, longitude };
          if (Platform.OS == 'android') {
              if (markerRef.current) {
                  markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
              }
          } else {
              coordinate.timing(newCoordinate).start();
          }
      }
  
      const onCenter = () => {
          mapRef.current.animateToRegion({
              latitude: curLoc.latitude,
              longitude: curLoc.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
          })
      }
  
      const fetchTime = (d, t) => {
          setState(state => ({ ...state, distance: d, time: t }))
      }
  

    
    return (
 
        <MapView
        style = {{height: '100%', width: '100%'}}
        provider = {PROVIDER_GOOGLE}
        showsUserLocation = {true}
        followsUserLocation = {true}
        initialRegion={{
        ...curLoc,
        latitude: 1.3493957438584392,
        longitude: 103.69615309937721,
        latitudeDelta: LATITUDE_DELTA, //0.0222,
        longitudeDelta: LONGITUDE_DELTA, //0.0121,
        }}
        >
        <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth = {2}
        strokeColor = "black"
        />
        
        <Marker.Animated
             ref={markerRef}
             coordinate={coordinate}
            //coordinate={originLoc}
            //title={'Origin'}
        >
          <Image
            style = {{width:40, height:40, resizeMode:'contain'}}
            source = {require('../../assets/images/39.jpeg')}
          />
        </Marker.Animated>

        {Object.keys(destinationCords).length > 0 && (<Marker
        coordinate={destinationCords}
        title={"Destination"}
        />)}
        
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