import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    image: {
        height:50,
        width: 50,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 30,
    },

    type: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    stop: {
        fontSize: 12,
        color: '#5d5d5d',  
    },

    rightContainer: {
        width: 50,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'green',
    },
    
    time: {
        color: '#fff',
    }
});

export default styles;