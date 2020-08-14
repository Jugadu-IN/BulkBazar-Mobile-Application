import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Linking} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default () => {
    return(
        <View style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.google.com/maps/place/Bulkbazar.in/@28.6475823,77.1926911,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0295dfb4d03b:0x9de566377bacd54d!8m2!3d28.6475823!4d77.1948798')}>
                <View style={styles.btnSize} >
                    <MaterialCommunityIcons name="google-maps" size={30} color="white"  style={styles.iconSetting}/>
                    <Text style={[styles.btnText,{color : 'white'}]}>Know our location.</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.contactCont}>
                <Entypo name="mail" size={30} color="black" />
                <Text style={[styles.btnText,styles.mailText]} onPress={() => Linking.openURL('mailto:info@bulkbazar.in')} >: info@bulkbazar.in</Text>
            </View>
            <View style={styles.contactCont}>
                <FontAwesome name="phone-square" size={30} color="black" /> 
                <Text style={styles.btnText}>: 9313220099</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer :{
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1,
    },
    btnSize : {
        width : "60%",
        height : 50,
        margin : 10,
        alignItems : 'center',
        borderRadius : 5,
        flexDirection : 'row',
        backgroundColor : '#1ea362'
    },
    btnText : {
        fontSize : 18,
        fontWeight : '600',
        marginLeft : 10
    },
    iconSetting : {
        marginLeft : '5%'
    },
    contactCont :{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10
    },
    mailText : {
        color : '#0000EE',
    },
});