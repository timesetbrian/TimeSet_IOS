import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Image,
  TouchableOpacity } from 'react-native';

export default class LoginIcons extends Component {

  render() {
    return (
      <View style={styles.container}>  
        <TouchableOpacity>
          <Image
            source={require('../assets/images/social_facebook_logo.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/social_google_logo.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/social_twitter_logo.png')}
            style={styles.lastIcon}
          />
        </TouchableOpacity>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30
  },
  icons: {
    marginRight: 93,
    height: 40, 
    width: 40,
  },
  lastIcon: {
    height: 40, 
    width: 40
  }
});
