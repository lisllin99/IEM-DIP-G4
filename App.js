import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BottomSheet from './components/BottomSheet';
import Map from './screens/Map';


const { width, height } = Dimensions.get("screen");

const App = () => {
  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Map />
      </View>
      <BottomSheet />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;