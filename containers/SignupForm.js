import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import axios from 'axios';

import SignupInput from '../components/SignupInput';
import SignupTerms from '../components/SignupTerms';
import SignupButton from '../components/common/SignupButton';
import PasswordInput from '../components/common/PasswordInput';
import Spinner from '../components/common/Spinner';

const ROOT_URL = 'http://timeset-gateway-test.us-east-1.elasticbeanstalk.com/api/v1/auth';

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
      loading: false,
      error: ''
    };
    this.onSignupPress = this.onSignupPress.bind(this);
    this.onSignupSuccess = this.onSignupSuccess.bind(this);
  }
  
  onSignupPress() {
    const { firstName, lastName, username, email, phone, password } = this.state;

    this.setState({error: '', loading: true})

    axios.post(`${ROOT_URL}`, {
      username: username,
      email: email,
      password: password
    })
      .then(response => console.log(response))
      .then(() => {
        this.onSignupSuccess()
      })
      .catch(err => {
        console.log(err)
        this.setState({error: 'Error', loading: false})
      })
  }

  onSignupSuccess () {
    this.props.handleSignup();
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
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
              placeholder='First Name'
            />
          </View>
          <View style={styles.lastNameContainer}>
            <TextInput
              style={styles.lastName}
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
              placeholder='Last Name'
            />
          </View>
        </View>

        <SignupInput 
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder='Username'
          autoCorrect={false}
        />
        <SignupInput 
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
          value={this.state.email}
          placeholder='Email Address'
        />
        <SignupInput 
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
          placeholder='Phone Number'
        />

        <PasswordInput 
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red' }} >{this.state.error}</Text>
        </View>

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
