import React, { useState, useEffect, useRef } from "react";
import { Image, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Notification from "./alert";

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

// constants to use
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const RouteMap = ({ origin, destination }) => {

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

  const { curLoc, destinationCords, coordinate } = state

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

  // Animation for a mock use-case
  const getLiveLocation1 = async () => {
    const latitude1 = 1.3554
    const longitude1 = 103.68808
    animate(latitude1, longitude1)
    for (i = 1; i <= 100; i++) {
      latitude1 += 0.0003
      longitude1 += 0.0002
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
  }

  const getLiveLocation2 = async () => {
    const latitude2 = 1.35567
    const longitude2 = 103.69690
    animate(latitude2, longitude2)
    for (i = 1; i <= 100; i++) {
      latitude2 += 0.0003
      longitude2 += 0.0002
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
  }

  const getLiveLocation3 = async () => {
    const latitude3 = 1.35058
    const longitude3 = 103.70266
    animate(latitude3, longitude3)
    for (i = 1; i <= 100; i++) {
      latitude3 += 0.0003
      longitude3 += 0.0002
      setState({
        ...state,
        curLoc: { latitude3, longitude3 },
        coordinate: new AnimatedRegion({
          latitude: latitude3,
          longitude: longitude3,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        })

      })
    }
  }


  const getLiveLocation = async () => {
    const latitude = destination.details.geometry.location.lat
    const longitude = destination.details.geometry.location.lng
    animate(latitude, longitude)
    for (i = 1; i <= 100; i++) {
      latitude += 0.0003
      longitude += 0.0002
      setState({
        ...state,
        curLoc: { latitude, longitude },
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        })
      })
    }
  }

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      getLiveLocation1()
    }, 20000)
  }, []);


  useEffect(() => {
    timeout = setTimeout(() => {
      getLiveLocation2()
    }, 23000)
  }, []);

  useEffect(() => {
    timeout = setTimeout(() => {
      getLiveLocation3()
    }, 26000)
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation()
    }, 29000);
    return () => clearInterval(interval)
  })

  return (

    <MapView
      style={{ height: '100%', width: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
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
        strokeWidth={2}
        strokeColor="black"
      />

      <Marker.Animated
        ref={markerRef}
        coordinate={coordinate}
      //coordinate={originLoc}
      //title={'Origin'}
      >
        <Image
          style={{ width: 40, height: 40, resizeMode: 'contain' }}
          source={require('../../assets/images/39.jpeg')}
        />
      </Marker.Animated>

      {Object.keys(destinationCords).length > 0 && (<Marker
        coordinate={destinationCords}
        title={"Destination"}
      />)}

      {users.map((user) => (
        <Marker
          key={user.id}
          coordinate={{ latitude: user.latitude, longitude: user.longitude }}
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

      <Notification />
    </MapView>


  );
};

export default RouteMap;