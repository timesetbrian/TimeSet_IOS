import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class HomeScreeen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreeen</Text>
        <Text>HomeScreeen</Text>
        <Text>HomeScreeen</Text>
        <Text>HomeScreeen</Text>
        <Text>HomeScreeen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
