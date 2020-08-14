import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import SplashScreen from './src/spashScreen';
import HomeStack from './src/homeStack';
import HomeDrawer from './src/homeDrawer';
import HeaderComponent from './src/headerComponent';

export default function App() {

    const [isLoading,setLoading] = useState({isLoading : true});

    const waitTask = () => {
        return new Promise((resolve) => 
            setTimeout(() => { resolve('result') }, 1500)
        );
    };

    const removeSplash = async() => {
      await waitTask();
      anim();
    }
    removeSplash();

    const [fadeValue,changeval] = useState(new Animated.Value(1));

    const anim = () => {
        Animated.timing(fadeValue,{
          toValue : 0,
          duration : 200,
          useNativeDriver: true
        }).start(() => setLoading(false));
    };

    return (
      <View style={styles.container}>
      {isLoading ? <SplashScreen fadeValue={fadeValue}/> : <HomeDrawer />}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
