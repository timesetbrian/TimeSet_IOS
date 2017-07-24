import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import PastScreen from './PastScreen';
import FutureScreen from './FutureScreen';
import MapScreen from './MapScreen';

const HomeTopNav = TabNavigator({
  Past: {
    screen: PastScreen,
  },
  Future: {
    screen: FutureScreen
  },
  Map: {
    screen: MapScreen
  }
},
{
  tabBarPosition: 'top',
});


export default class HomeScreeen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tinified/home_white.png')}
        style={styles.icon}
      />
    ),
  };
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
  },
  icon: {
    width: 30,
    height: 30,
  }
});
