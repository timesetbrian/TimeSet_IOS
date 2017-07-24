import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text } from 'react-native';

export default class SignupHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CREATE NEW</Text>
        <Text style={styles.text}>ACCOUNT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginBottom: 50
  },
  text: {
    fontSize: 20, 
    letterSpacing: 3
  }
});
