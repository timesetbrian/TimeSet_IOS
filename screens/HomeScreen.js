import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PastScreen from './PastScreen';
import { Button } from 'react-native-elements';

const HomeTopNav = TabNavigator({
  Past: {
    screen: PastScreen,
  }
},
{
  tabBarPosition: 'top',
});


export default class HomeScreeen extends Component {
  render() {
    return <HomeTopNav />
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
