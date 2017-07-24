import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  TouchableOpacity } from 'react-native';

export default class SignupTerms extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>By tapping "Sign Up" you agree</Text>
        <View style={styles.direction}>
          <Text style={styles.text}>to the </Text>
          <TouchableOpacity >
            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>terms & conditions</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  },
  direction: {
    flexDirection: 'row'
  },
  termsContainer: {
    borderColor: '#90BC46',
    borderBottomWidth: 1
  },
  termsText: {
    color: '#90BC46', 
    fontSize: 16
  },
});
