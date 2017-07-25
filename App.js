import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Redux
import reducers from './reducers/index';

// Screens
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
      notifications: { screen: NotificationsScreen },
      profile: { screen: ProfileScreen }
    })
  }
});

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    
    );
  }
}
