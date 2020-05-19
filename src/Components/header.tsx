import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header ({text}) {
return(
    <View style={styles.header}>
        <Text style={styles.title}> {text}</Text>
    </View>
)
}

const styles = StyleSheet.create(
    {
        header:{
            height: 80,
            paddingTop: 30,
            backgroundColor: 'grey'
        },
        title:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
);
