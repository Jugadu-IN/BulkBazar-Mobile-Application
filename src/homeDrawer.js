import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Policy from './components/policies';
import Terms from './components/termsandconditions';
import HomeStack from './homeStack';
import HeaderComponent from './headerComponent';

const HomeDrawer = createDrawerNavigator();


export default () => {
    return(
        <View style={{flex : 1}}>
        <NavigationContainer>
            <HomeDrawer.Navigator>
                <HomeDrawer.Screen name="Home" component={HomeStack} />
                <HomeDrawer.Screen  name="Privacy Policy" component={Policy}/>
                {/*<HomeDrawer.Screen name="Terms and Conditions" component={Terms} />*/}
            </HomeDrawer.Navigator>
        </NavigationContainer>
        </View>
    )
};