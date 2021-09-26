import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

// get user current location, find all nearby bustop around a surrounding area
let id = [27251, 27241, 27141] // some bus stops near ntu
// get a list of bus stops from user current location
// worst case hard code all available bus stops near ntu, but then how to keep calling api using the different bus stop number?
// need to get time by using estimated arrival time - current time as well

export default class NearMe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch ('http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=' + id[0], {
            method: 'GET',
            headers: {
              'AccountKey' : 'cdKirqNTQQi5PB4kiSoUeQ==',
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then ( (responseJson) => {
                    this.setState ({
                        isLoading: false,
                        dataSource: responseJson.Services,
                    })
            })

            .catch((error) => {
                console.log(error)
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style = {styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            let services = this.state.dataSource.map((val,key) => {
                return <View key = {key} style = {styles.item}>
                        <Text>{id[0]}</Text>
                        <Text>{val.BusStopCode}</Text>
                        <Text>{val.ServiceNo}</Text>
                        <Text>{val.NextBus.EstimatedArrival}</Text>
                        <Text>{val.NextBus.Load}</Text>
                        <Text>{val.NextBus2.EstimatedArrival}</Text>
                        <Text>{val.NextBus2.Load}</Text>
                        <Text>{val.NextBus3.EstimatedArrival}</Text>
                        <Text>{val.NextBus3.Load}</Text>
                        </View>
            });

            return (
                <View style = {styles.container}>
                    {services}
                </View>
            );

        }
    }
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'

    }
});
