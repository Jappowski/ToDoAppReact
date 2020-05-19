import { StyleSheet, Dimensions } from 'react-native';

export const homeStyles = StyleSheet.create({
    header : {
        marginTop:20,
        flexDirection: 'row',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height:80,
        padding:0,

    },
    headerImage: {
        height: 60,
        width: 60,
        margin: 11,
        borderRadius: 50 ,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color:'#fff',
        marginTop: 40,
        marginLeft: 10,

    },
    
});
export const homeScreenText = StyleSheet.create({
    text: {
        marginTop: 10,
        padding: 10,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
    }
})

export const galleryStyles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        height: "15%",
        marginTop:20,
    },
    headerText :{
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 15,
    },
    tileContainer: {
        flex:0,
        padding: 10,
        alignContent: 'center',
        height: "100%",
        marginTop:"25%"
    },
    tile: {
        flex:1,
        height: "20%",
        backgroundColor: 'white',
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1
    },
    tileImage: {
        height: 100,
        width: 100,
        margin: 3,

    },
    tileTextContainer:{
        marginTop: 15,
        marginLeft: 5,
        flex: 1
    },
    tileText: {
        fontSize: 12,
    }
})