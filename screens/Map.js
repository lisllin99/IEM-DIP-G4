import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



function Map() {
    return (
        <View style={{ marginTop: 50, flex: 1, }}>

            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAPiR_7iMHp27BKbIq1o70EkpyU36YGpjE',
                    language: 'en',
                }}

                styles={{
                    container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                    listView: { backgroundColor: "white" }
                }}
            />

            <MapView style={styles.map}
                initialRegion={{
                    latitude: 1.3434, //specifies the location on map
                    longitude: 103.6807,
                    latitudeDelta: 0.00922, // specifies how much of the map you are able to see
                    longitudeDelta: 0.00421,
                }}

                provider="google"
            >

                <Marker
                    coordinate={{
                        latitude: 1.3434, //specifies the location on map
                        longitude: 103.6807,
                    }}
                >

                    <Callout>
                        <Text>Im here</Text>
                    </Callout>

                </Marker>

            </MapView>

        </View >




    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;

