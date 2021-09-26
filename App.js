import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BottomSheet from './components/BottomSheet';
import Map from './screens/Map';
import NearMe from './screens/NearMe';


const { width, height } = Dimensions.get("screen");

const App = () => {
  return (
    <View style = {styles.container}>
        <NearMe/>
    </View >
  );
};

// show map in another tab first need to settle bus timings etc

/*const App = () => {
  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Map />
      </View>
      <BottomSheet />
    </View >
  );
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;