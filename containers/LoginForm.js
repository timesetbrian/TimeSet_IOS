import React, { Component } from 'react';
import { 
  StyleSheet,  
  View,
  TextInput,
  TouchableOpacity,
  Text } from 'react-native';
import axios from 'axios';

import SignupButton from '../components/common/SignupButton';
import PasswordInput from '../components/common/PasswordInput';
import Spinner from '../components/common/Spinner';

const ROOT_URL = 'http://timeset-gateway-test.us-east-1.elasticbeanstalk.com/api/v1/auth/sign_in';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      error: '',
      loading: false,
    };
    this.onSigninPress = this.onSigninPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onSigninPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    axios.post(`${ROOT_URL}`, {
      email: email,
      password: password
    })
      .then(response => {
        console.log(response);
      })
      .then(() => this.onLoginSuccess())
      .catch(err => this.onLoginFail(err));
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false
    });
    this.props.handleSignin();
  }

  onLoginFail(err) {
    this.setState({ error: 'Invalid username or password', loading: false });
    console.log('error', err);
  }

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <SignupButton onPress={this.onSigninPress} text='SIGN IN' />;
  }

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.emailContainer}>
          <TextInput
            onChangeText={email => this.setState({ email })}
            style={styles.email}
            value={this.state.email}
            placeholder='Email'
            autoCorrect={false}
          />
        </View>
        <PasswordInput 
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red' }} >{this.state.error}</Text>
        </View>
        <TouchableOpacity style={styles.forgotPwContainer}>
          <Text style={styles.forgotPwText}>Forgot password?</Text>
        </TouchableOpacity>
        
        {this.renderSpinner()}

      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300
  },
  emailContainer: {
    paddingLeft: 15,
    borderColor: '#C3C4C4',  
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 1,
  },
  email: {
    fontSize: 16,
    height: 50,
  },
  forgotPwContainer: {
    alignItems: 'flex-end'
  },
  forgotPwText: {
    fontSize: 16, 
    marginTop: 10
  }
});
