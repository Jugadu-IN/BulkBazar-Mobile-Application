import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      setLoading(false);
    }
    removeSplash();

    return (
      <View style={styles.container}>
      {isLoading ? <SplashScreen /> : <HomeDrawer />}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
