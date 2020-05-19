import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../Components/header';
import ToDoItem from "../../Components/todoItem";
import AddToDo from "../../Components/addToDo";


export default function App({}) {
    const [todos, setTodos] = useState([
        
    ]);
    
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter ( todo => todo.key != key);
        });
    };
    
    const submitHandler = (text) => {
        if(text.length >= 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString() },
                    ...prevTodos
                ]
            })
        } 
        else {
            Alert.alert('Upsi', 'Todo musi mieć przynajmniej 3 znaki', [
                {text: 'Ok', onPress:() => console.log('Accepted')}
            ]);
        }
        
        
        
    }
    return (
        <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss();}}>
        <View style={styles.container}>
            <Header text={'My Todos'} />
           <View style={styles.content}>
               <AddToDo submitHandler={submitHandler}/>
               <View style={styles.list}>
                   <FlatList 
                       data={todos}
                       renderItem={({item}) => (
                           <ToDoItem item={item} pressHandler={pressHandler}/>
                             )}
                       />
               </View>

           </View> 
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    
    
    content:{
        padding: 40,
        flex:1,
    },
    list: {
        flex:1,
      marginTop: 20,   
    }
    
});
