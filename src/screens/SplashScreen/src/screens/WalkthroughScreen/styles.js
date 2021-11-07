import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 15,
      color: 'white',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      width: 400,
      height: 400,
      borderRadius:20,
      paddingTop: 200,
      
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#8CA0D7',
    },
    container1: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#8CA0D7',
      borderRadius:10,
      paddingVertical: 20,
      width: 370,
      height: 100,
      
    },
    button: {
      fontSize: 18,
      color: 'white',
      marginTop: 10,
    },
  });
};

export default dynamicStyles;
