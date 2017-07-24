import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const PasswordInput = ({ value, onChangeText }) => (
  <View style={styles.container}>
    <TextInput 
      style={styles.text}
      placeholder='Password'
      secureTextEntry
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 15,
    borderColor: '#C3C4C4',  
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    height: 50,
    fontSize: 16,
  }
});

export default PasswordInput;
