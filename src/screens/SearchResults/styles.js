import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#ebeef2',
        borderRadius: 20,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 16,
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
});

export default styles;