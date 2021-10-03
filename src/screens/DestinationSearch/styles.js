import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    textInput: {
        padding: 10,
        backgroundColor: "#eee",
        marginVertical: 5,
        marginLeft: 20,
    },

    separator: {
        
            backgroundColor: '#dddddd',
            height: 1,
        
    }, 
    container: {
        padding: 10,
        height: '100%',
    },

    row : {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,   

    },
    iconContainer :{
        backgroundColor : '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText :{

    },

    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top :20,
        left: 15,
        borderRadius: 5,
    },

    line: {
        width: 1,
        height: 55,
        backgroundColor: '#919191',
        position: 'absolute',
        top :25,
        left: 16.5,
    },

    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top :80,
        left: 15,
    },
});

export default styles;