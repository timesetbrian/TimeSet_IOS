import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
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
