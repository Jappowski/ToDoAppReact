import React, { FC } from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import PhotoItem from "../../Components/photoItem";
import {galleryStyles} from "../../constans/Styles";
import Header from "../../Components/header";
import Constants from "expo-constants";

const Gallery = () => {

    const haha = "hahahahhahahahahahahhahahahahaahhahahahahahahahhahahahahahahahhahahahahahahh";

    return (
        <View>
            <View style={styles.container}>
                <Header text={'Gallery'}></Header>
            </View>
            <ScrollView style={galleryStyles.tileContainer}>
                <PhotoItem imageLeft={true} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={false} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={true} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={false} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={true} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={false} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={false} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={true} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                <PhotoItem imageLeft={true} tileText={haha} imageSrc={require('../../assets/logo.png')}/>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
});
export default Gallery;