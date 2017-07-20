import React from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  TouchableOpacity } from 'react-native';

const SignupButton = ({ text, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{ text }</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90BC46',
    shadowColor: '#90BC46',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.38,
    elevation: 2,
    marginTop: 30
  },
  text: {
    color: '#F3F3F3'
  }
});

export default SignupButton;
