import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    inputBox: {
        backgroundColor: '#ebeef2',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#6e6e6e',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#8CA0D7',
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    iconContainer: {
        backgroundColor:'#8CA0D7',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft:30,
        fontWeight: '600',
        fontSize: 20,
    },
});

export default styles;