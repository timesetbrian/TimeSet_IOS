import React, { Component } from 'react';
import { 
  StyleSheet,  
  View,
  TouchableOpacity,
  Text } from 'react-native';

export default class LoginFooter extends Component {
  render() {
    return (          
      <View style={styles.container}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={this.props.handleCreateAccount}
        >
          <Text style={styles.createText}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 14
  },
  createText: {
    color: '#90BC46', 
    fontSize: 14
  }
});
