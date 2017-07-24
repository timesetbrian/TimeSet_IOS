import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SignupHeader from '../components/SignupHeader';
import SignupForm from '../containers/SignupForm';

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    this.props.navigation.navigate('main');
  }

  render() {
    return (
      <View style={styles.container}>
        
        <SignupHeader />

        <SignupForm handleSignup={this.handleSignup} />
                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  }
});
