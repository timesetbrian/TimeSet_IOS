import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tinified/notifications_white.png')}
        style={styles.icon}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationsScreen</Text>
        <Text>NotificationsScreen</Text>
        <Text>NotificationsScreen</Text>
        <Text>NotificationsScreen</Text>
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
