import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import bulkbazaarImage from '../../assets/bulkbazar logo.png';
import { Entypo } from '@expo/vector-icons';
import { Linking} from 'react-native'
import HeaderComponent from '../headerComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const mainScreen = (props) => {

    return(
        <View style={{flex : 1}}>
            <HeaderComponent {...props} />
        <View style={styles.mainCont}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Home Page")}>
                <View  style={[styles.btnSize,styles.bulkbazarBtn]}>
                   { /*<Image style={styles.bulkbazaarImg}
                    source={bulkbazaarImage}
    />*/ }          
                    <MaterialCommunityIcons name="web" size={30} color="white"  style={styles.iconSetting}/>
                    <Text style={styles.btnText}>
                        BulkBazar.in
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Contact Us")}>
                <View  style={[styles.btnSize,styles.bulkbazarBtn]}>
                <Entypo name="mail" size={30} color="white" style={styles.iconSetting}/>
                    <Text style={styles.btnText}>
                        Contact Us
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.facebook.com/bulkbazar.in')}>
                <View  style={[styles.btnSize,styles.fbBtn]}>
                <AntDesign name="facebook-square" size={30} color="white" style={styles.iconSetting}/>
                    <Text style={styles.btnText}>
                        Facebook
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.instagram.com/bulkbazar/')}>
                <View  style={[styles.btnSize,styles.instagramBtn]}>
                <FontAwesome name="instagram" size={30} color="white" style={styles.iconSetting}/>
                    <Text style={styles.btnText}>
                        Instagram
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://wa.me/919313220099')}>
                <View  style={[styles.btnSize,styles.whatsappBtn]}>
                <FontAwesome5 name="whatsapp" size={30} color="white" style={styles.iconSetting}/>
                    <Text style={styles.btnText}>
                        WhatsApp
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainCont : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
    },
    btnSize : {
        width : "60%",
        height : 50,
        margin : 25,
        alignItems : 'center',
        borderRadius : 5,
        flexDirection : 'row',
    },  
    fbBtn : {
        backgroundColor : "#3b5998",
    },
    whatsappBtn : {
        backgroundColor : "#25D366",
    }, 
    instagramBtn : {
        backgroundColor : "#F56040",
    },
    iconSetting : {
        marginLeft : '5%'
    },
    bulkbazarBtn : {
        backgroundColor : '#585550',
    },  
    bulkbazaarImg : {
        height : 30,
        width : 30,
        marginLeft : '5%'
    },  
    btnText : {
        fontSize : 16,
        color : "white",
        fontWeight : '600',
        marginLeft : 10
    }
});

export default mainScreen;
