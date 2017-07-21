import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ImageCarouselList from '../components/ImageCarouselList';

export default class HomeScreeen extends Component {
  
  render() {
    return (
      <View>
        <ImageCarouselList />
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
