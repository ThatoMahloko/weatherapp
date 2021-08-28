import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, stat } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './src/Screens/Search';
import Home from './src/Screens/Home';
import { auto } from 'async';
import axios from 'axios';
export default function App() {

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  //     params: {
  //       q: 'London,uk',
  //       lat: '0',
  //       lon: '0',
  //       callback: 'test',
  //       id: '2172797',
  //       lang: 'null',
  //       units: '"metric" or "imperial"',
  //       mode: 'xml, html'
  //     },
  //     headers: {
  //       'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  //       'x-rapidapi-key': 'a03eea83aemshf6f0ec9c239e73fp1980cdjsn3fcb68379662'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // })
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({

})
