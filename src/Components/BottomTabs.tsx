
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../screens/List';
import Home from '../screens/Home';
import Photos from '../screens/Photos';



const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="Photos" component={Photos} />
        </Tab.Navigator>
    );
};
export default BottomTabs;

