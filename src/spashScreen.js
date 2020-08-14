import React, {useState,useContext} from 'react';
import { Animated, StyleSheet, Text, View, Image} from 'react-native';
import bulkbazaarImage from '../assets/bulkbazar logo with text.png';

const splashScreen = (props) => {

    return(
        <Animated.View style={[styles.mainConatiner,{opacity : props.fadeValue}]}>
            {/*<Image  style={{width : "80%",height : 200,resizeMode : "contain"}} source={bulkbazaarImage}/>*/}
            <Text style={{fontSize : 50, fontWeight : '500'}}>BulkBazar</Text>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    mainConatiner : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f6f2f2',
    },
});

export default splashScreen;