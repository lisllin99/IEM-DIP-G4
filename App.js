import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BottomSheet from './components/BottomSheet';
import Map from './screens/Map';
<<<<<<< HEAD
import NearMe from './screens/NearMe';
=======
>>>>>>> c08fa945ac2952a79eb62443240a4cc59a6adbd7


const { width, height } = Dimensions.get("screen");

const App = () => {
  return (
<<<<<<< HEAD
    <View style = {styles.container}>
        <NearMe/>
    </View >
  );
};

// show map in another tab first need to settle bus timings etc

/*const App = () => {
  return (
=======
>>>>>>> c08fa945ac2952a79eb62443240a4cc59a6adbd7
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Map />
      </View>
      <BottomSheet />
    </View >
  );
<<<<<<< HEAD
};*/
=======
};
>>>>>>> c08fa945ac2952a79eb62443240a4cc59a6adbd7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;