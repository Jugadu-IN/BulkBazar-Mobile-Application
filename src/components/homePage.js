import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';

export default () => {
    return(
            <WebView source={{ uri: 'http://bulkbazar.herokuapp.com/' }} style={{ marginTop: 20 }} />
    )
};