import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class BuckeListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'BucketList',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tinified/bucketlist_white.png')}
        style={styles.icon}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>BuckeListScreen</Text>
        <Text>BuckeListScreen</Text>
        <Text>BuckeListScreen</Text>
        <Text>BuckeListScreen</Text>
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
  }, 
  icon: {
    width: 30,
    height: 30,
  }
});
