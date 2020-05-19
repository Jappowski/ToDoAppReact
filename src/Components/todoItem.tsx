import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function ToDoItem({item, pressHandler}) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            
            <Text style = {styles.title}>{item.text}</Text>
           
            
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    title: {
        padding: 16,
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 10
    }
})