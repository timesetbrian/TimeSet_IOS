import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import BucketListScreen from './screens/BucketListScreen';
import CameraScreen from './screens/CameraScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';

const Nav = TabNavigator({
  login: { screen: LoginScreen },
  signup: { screen: SignupScreen },
  main: {
    screen: TabNavigator({
      home: { screen: HomeScreen },
      bucketlist: { screen: BucketListScreen },
      camera: { screen: CameraScreen },
      notifications: { screen: NotificationsScreen},
      profile: { screen: ProfileScreen }
    })
  }
});

export default class App extends Component {
  render() {
    return <Nav />;
  }
}
