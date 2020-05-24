import React, { FC } from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import PhotoItem from "../../Components/photoItem";
import {galleryStyles} from "../../constans/Styles";
import Header from "../../Components/header";
import Constants from "expo-constants";

const Gallery = () => {

    const com1 = "Babiogórski Park Narodowy – polski park narodowy utworzony w 1954 roku na terenie ówczesnego województwa krakowskiego.";
    const com2 = "Białowieski Park Narodowy – polski park narodowy położony w północno-wschodniej części Polski, w województwie podlaskim, utworzony z Nadleśnictwa Rezerwat jako Park Narodowy w Białowieży obowiązującym od 11 sierpnia 1932 r."
    const com3 = "Biebrzański Park Narodowy – jeden z 23 parków narodowych Polski, utworzony 9 września 1993. Największy Park w Polsce o powierzchni 592,23 km², położony na terenach Kotliny Biebrzańskiej w województwie podlaskim."
    const com4 = "Bieszczadzki Park Narodowy – jeden z 23 polskich parków narodowych położony w Bieszczadach Zachodnich. Utworzony w 1973 roku."
    const com5 = "Park Narodowy „Bory Tucholskie” – jeden z 23 parków narodowych na terenie Polski i 11 na nizinach. Znajduje się na terenie województwa pomorskiego, w powiecie chojnickim, w granicach gmin Chojnice i Brusy. Siedzibą dyrekcji parku jest miejscowość Charzykowy, położona 3 km od Chojnic."
    const com6 = "Drawieński Park Narodowy – jeden z 23 polskich parków narodowych, położony jest na terenie trzech województw: lubuskiego, zachodniopomorskiego i wielkopolskiego."
   
    const com9 = "Logo aplikacji"
    
    return (
        <View style={styles.container}>
            <View>
                <Header text={'Gallery'}></Header>
            </View>
            <ScrollView style={galleryStyles.tileContainer}>
                <PhotoItem imageLeft={true} tileText={com1} imageSrc={require('../../assets/1.png')}/>
                <PhotoItem imageLeft={false} tileText={com2} imageSrc={require('../../assets/2.png')}/>
                <PhotoItem imageLeft={true} tileText={com3} imageSrc={require('../../assets/3.png')}/>
                <PhotoItem imageLeft={false} tileText={com4} imageSrc={require('../../assets/4.png')}/>
                <PhotoItem imageLeft={true} tileText={com5} imageSrc={require('../../assets/6.png')}/>
                <PhotoItem imageLeft={false} tileText={com6} imageSrc={require('../../assets/5.png')}/>
                <PhotoItem imageLeft={false} tileText={com9} imageSrc={require('../../assets/logo.png')}/>
                
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