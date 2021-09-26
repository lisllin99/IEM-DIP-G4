import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

export default class NearMe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        return fetch ('http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=27369', {
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
                        <Text>{val.ServiceNo}</Text>
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
