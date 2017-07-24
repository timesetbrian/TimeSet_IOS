import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SignupInput = ({ placeholder, value, onChangeText, autoCorrect }) => (
  <View style={styles.container}>
    <TextInput
      autoCorrect={autoCorrect}
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#C3C4C4',
    paddingLeft: 15,
  },
  input: {
    fontSize: 16,
    height: 50,
  }
});

export default SignupInput;
