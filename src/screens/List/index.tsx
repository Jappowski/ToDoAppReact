import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../Components/header';


export default function App() {
    const [todos, setTodos] = useState([
        { text: 'aaa', key: '1'},
        { text: 'bbb', key: '2'},
        { text: 'ccc', key: '3'}
    ]);
    return (
        <View style={styles.container}>
            <Header />
           <View style={styles.content}>
               {/* TO FORM */}
               <View style={styles.list}>
                   <FlatList 
                       data={todos}
                       renderItem={({item}) => (
                           <Text>{item.text}</Text>
                             )}
                       />
               </View>
               
           </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#000',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    
    content:{
        padding: 40,
    },
    list: {
      marginTop: 20,   
    }
    
});
