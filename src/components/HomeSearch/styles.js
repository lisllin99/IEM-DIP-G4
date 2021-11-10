import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#ebeef2',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        backgroundColor: '#8CA0D7',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 30,
        fontWeight: '600',
        fontSize: 20,
    },
    cardView: {
        width: 380,
        alignSelf: "center",
        alignItems: "center",
        padding: 20,
        marginTop: -19,
        elevation: 5,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingTop: 100,
    },
    cardBtn: {
        padding: 8,
        backgroundColor: "#8ca0d7",
        borderRadius: 20,
        width: 120,
        alignItems: 'center',
        marginTop: 60
    },
});

export default styles;