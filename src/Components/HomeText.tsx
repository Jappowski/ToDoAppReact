import React, { FC } from 'react';
import {Text, View, ScrollView, StyleSheet,} from 'react-native';
import { homeScreenText } from '../constans/Styles';
import Constants from "expo-constants";

interface IHomescreenTextProp  {
    text:string;
}

const HomescreenText:FC<IHomescreenTextProp> = ({text}) => {
    return (
        <View style={styles.container}>
            
            <Text style={homeScreenText.text}>
                {text}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
});

export default HomescreenText;