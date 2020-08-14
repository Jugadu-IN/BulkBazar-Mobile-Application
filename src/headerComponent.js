import React from 'react';
import { StyleSheet, Text, View, Platform,SafeAreaView,Dimensions,Image, TouchableWithoutFeedback} from 'react-native';
import { Feather } from '@expo/vector-icons';
import bulkbazaarImage from '../assets/bulkbazar logo.png';

const windowHeight = Dimensions.get('window').height;

export default (props) => {
    return(
        <View style={styles.headerContainer}>
        <View style={[styles.notchprotect,styles.bgColor]} />
        <View style={[styles.header,styles.bgColor]}>
            <TouchableWithoutFeedback onPress={() => props.navigation.openDrawer()}><Feather name="menu" size={35} color="black" style={styles.hamburger}/></TouchableWithoutFeedback>
            <View style={{flexDirection:'row', alignItems : 'center' ,justifyContent : 'center'}}>
            <Image source={bulkbazaarImage} style={styles.headerImg} 
        resizeMode='contain'/>
        <Text style={styles.headerText}>BulkBazar</Text> 
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notchprotect : {
        width : "100%",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }, 
    bgColor : {
       
    },
    header : {
        height : windowHeight*0.07,
        width : '100%',
        alignItems : 'center',
        flexDirection : 'row',
        position : 'relative',
        justifyContent : "center",
    },
    hamburger : {
        position : 'absolute', 
        left : 15,
    },
    headerImg : {
        height : 30,
        width : 30,
    },
    headerText : {
        fontSize : 22,
        fontWeight : '500',
        marginLeft : 10,
    },
    headerContainer : {
        backgroundColor : 'white',
        justifyContent : "center",
        alignItems : 'center',
    }
});