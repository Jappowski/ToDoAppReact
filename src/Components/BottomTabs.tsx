
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../screens/List';
import Home from '../screens/Home';
import Photos from '../screens/Photos';



const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel:'Home',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="ios-home" color={color} size={size}/>
                        )
                    }} />
                
            <Tab.Screen
                name="List"
                component={List}
                options={{
                tabBarLabel:'List',
                tabBarIcon: ({color, size}) => (
                    <Icon name="ios-book" color={color} size={size}/>
                )
            }} />
            <Tab.Screen
                name="Gallery"
                component={Photos}
                options={{
                    tabBarLabel:'Gallery',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="ios-camera" color={color} size={size}/>
                    )
                }} />
        </Tab.Navigator>
    );
};
export default BottomTabs;

