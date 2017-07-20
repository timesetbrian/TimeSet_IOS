import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

//Components
import LoginHeader from '../components/LoginHeader';
import LoginIcons from '../components/LoginIcons';
import LoginFooter from '../components/LoginFooter';
// Container
import LoginForm from '../containers/LoginForm';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }
  handleCreateAccount() {
    this.props.navigation.navigate('signup');
  }
  handleSignin() {
    this.props.navigation.navigate('main');
  }

  render() {
    return (
      <View style={styles.container}>  
        <LoginHeader />
        <LoginForm handleSignin={this.handleSignin} />
        <LoginIcons />
        <LoginFooter handleCreateAccount={this.handleCreateAccount} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },
});
