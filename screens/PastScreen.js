import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import ImageCarouselList from '../components/ImageCarouselList';

export default class PastScreen extends Component {
  
  
  render() {
    return (
        <ImageCarouselList/>
     
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
