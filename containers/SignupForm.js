import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import SignupInput from '../components/SignupInput';
import SignupTerms from '../components/SignupTerms';
import SignupButton from '../components/common/SignupButton';
import PasswordInput from '../components/common/PasswordInput';
import Spinner from '../components/common/Spinner';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '', 
      lastName: '', 
      username: '',
      email: '',
      phone: '',
      password: '',
      loading: false
    };
    this.onSignupPress = this.onSignupPress.bind(this);
  }
  
  onSignupPress() {
    const { firstName, lastName, username, email, phone, password } = this.state;

    fetch('http://timeset-gateway-test.us-east-1.elasticbeanstalk.com/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        email,
        phone
      })
    })
    .then(response => console.log(response))
    .then(this.props.handleSignup)
    .catch(err => console.log(err));

    // fetch('https://httpbin.org/get')
    // .then(response => console.log(response));
  }

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <SignupButton onPress={this.onSignupPress} text='SIGN UP' />;
  }

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.direction}>
          <View style={styles.firstNameContainer}>
            <TextInput
              style={styles.firstName}
              onChangeText={firstName => this.setState({ firstName })}
              placeholder='First Name'
              value={this.state.firstName}
            />
          </View>
          <View style={styles.lastNameContainer}>
            <TextInput
              style={styles.lastName}
              onChangeText={lastName => this.setState({ lastName })}
              placeholder='Last Name'
              value={this.state.lastName}
            />
          </View>
        </View>

        <SignupInput 
          placeholder='Username'
          autoCorrect={false}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <SignupInput 
          placeholder='Email Address'
          autoCorrect={false}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <SignupInput 
          placeholder='Phone Number'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />

        <PasswordInput 
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <SignupTerms />

        {this.renderSpinner()}

      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300
  },
  direction: {
    flexDirection: 'row'
  },
  firstNameContainer: {
    paddingLeft: 15,
    flex: 2,
    borderTopLeftRadius: 5,
    borderWidth: 1, 
    borderColor: '#C3C4C4'
  },
  firstName: {
    fontSize: 14,
    height: 50, 
  },
  lastNameContainer: {
    paddingLeft: 15,
    flex: 2,
    borderColor: '#C3C4C4',
    borderTopRightRadius: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1
  },
  lastName: {
    fontSize: 14,
    height: 50,
  }
});
