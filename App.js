import { useLinkProps } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './components/Navigation';

export default function App() {

return ( <Navigation></Navigation>
    // <View style={styles.container}>
    //   <Buses onChange={ChoseBus}></Buses>
    //   <Ticket></Ticket>
    //   <StatusBar style="auto"/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
