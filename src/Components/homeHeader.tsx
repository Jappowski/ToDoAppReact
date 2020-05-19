import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType, ScrollView } from 'react-native';
import { homeStyles } from '../constans/Styles';

interface IHomescreenCompProp  {
    headerText:string;
    image:ImageSourcePropType
}

const HomescreenComp:FC<IHomescreenCompProp> = ({headerText, image}) => {
    return (
        <View>
            <View style={homeStyles.header}>
                <Image
                    style={homeStyles.headerImage}
                    source={image}>
                </Image>
                <Text style={homeStyles.headerText}>
                    {headerText}
                </Text>
            </View>
            



        </View>
    );
}


export default HomescreenComp;