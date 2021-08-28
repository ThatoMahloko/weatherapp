import React, { useState } from 'react';
import { StyleSheet, Text, View, stat } from 'react-native';
import Search from './src/Screens/Search';

export default function App() {


  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin:'auto', 
    marginTop: 30,
  }
})
