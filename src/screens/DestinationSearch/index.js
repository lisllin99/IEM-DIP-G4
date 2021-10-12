import React, {useState, useEffect} from 'react';
import {View,Text, SafeAreaView} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



const DestinationSearch = (props) => {


    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkNavigation = () => {
      if (originPlace && destinationPlace) {
        navigation.navigate('SearchResults', {
          originPlace,
          destinationPlace,
        })
      }
    }
  
    useEffect(() => {
      checkNavigation();
    }, [originPlace, destinationPlace]);

    return (
    <SafeAreaView>
        <View style = {styles.container}>
        <GooglePlacesAutocomplete
        placeholder='From Where?'
        onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
        enablePoweredByContainer ={false}
        suppressDefaultStyles
        currentLocation = {true}
        currentLocationLabel ='Current Location'
        styles ={{
            textInput: styles.textInput,
            container: {
                position: 'absolute',
                top: 0,
                left: 10,
                right: 10,
            },
            listView:{
                position: 'absolute',
                top: 105,
            },
            separator: styles.separator
        }}
        fetchDetails
        query={{
            key: 'AIzaSyAPiR_7iMHp27BKbIq1o70EkpyU36YGpjE',
            language: 'en',
        }}

        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
        />
        

        <GooglePlacesAutocomplete
        placeholder='Meet Where?'
        onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
        enablePoweredByContainer ={false}
        suppressDefaultStyles
        styles ={{
            textInput: styles.textInput,
            container: {
                position: 'absolute',
                top:55,
                left: 10,
                right: 10,
            },
            separator: styles.separator
        }}
        fetchDetails
        query={{
            key: 'AIzaSyA0SMI0cQscMTxQxYMC8tDuCyLV5AzmnSs',
            language: 'en',
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near "From" input*/}
        <View style ={styles.circle} />

        {/* Line between dots */}
        <View style ={styles.line} />

        {/* Square near destination point */}

        <View style ={styles.square} />

        </View>
        </SafeAreaView>

        

    );
};

export default DestinationSearch;