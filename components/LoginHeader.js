import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const LoginHeader = () => (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')} 
      />
      <Text style={styles.name}>TimeSet</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginBottom: 20
  },
  logo: {
    width: 90, 
    height: 110,
    marginBottom: 30,
  },
  name: {
    fontSize: 22, 
    justifyContent: 'center',
    letterSpacing: 3
  }
});

export default LoginHeader;
