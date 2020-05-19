import React, { FC } from 'react';
import {Text, View, ScrollView,} from 'react-native';
import { homeScreenText } from '../constans/Styles';

interface IHomescreenTextProp  {
    text:string;
}

const HomescreenText:FC<IHomescreenTextProp> = ({text}) => {
    return (
        <View>
            
            <Text style={homeScreenText.text}>
                {text}
            </Text>
            



        </View>
    );
}


export default HomescreenText;