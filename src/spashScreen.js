import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import bulkbazaarImage from '../assets/bulkbazar logo with text.png';

const splashScreen = () => {

    return(
        <View style={styles.mainConatiner}>
            <Image  style={{width : "80%",height : 200,resizeMode : "contain"}} source={bulkbazaarImage}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainConatiner : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f6f2f2'
    },
});

export default splashScreen;