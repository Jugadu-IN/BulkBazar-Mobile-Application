import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MainScreen from './components/mainScreen';
import HomePage from './components/homePage';
import Policy from './components/policies';
import Terms from './components/termsandconditions';
import ContactUs from './components/contact';
import HeaderComponent from './headerComponent';

const Stack = createStackNavigator();

const homeStack = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen options={{headerShown : false}} name="Bulk Bazar" component={MainScreen} />
                <Stack.Screen options={{ title: null }} name="Home Page" component={HomePage} />
                <Stack.Screen options={{ title: null }} name="Contact Us" component={ContactUs} />
            </Stack.Navigator>
    );
};


export default homeStack;
