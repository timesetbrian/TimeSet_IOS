import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var {height, width} = Dimensions.get('window')

const Images = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class ImageCarousel extends Component {
  
  render() {
    return (
        <Carousel
          sliderWidth={width}
          itemWidth={width}
        >
          {Images.map(image => (
              <View style={styles.imageContainer} key={image.id}>
                <View style={styles.textContainer}>
                  <Text style={{ fontSize: 14 }}>
                    {image.text}
                  </Text>
                </View>
                <Image 
                  source={{ uri: image.uri }} 
                  style={styles.imageStyle}                 
                />
                <View style={styles.textContainer}>
                  <Text style={{ fontSize: 14 }}>
                    {image.text}
                  </Text>
                </View>
              </View>
            )
          )}
        </Carousel>

    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C3C4C4',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 0.04,
    width: width,
    marginBottom: 20
  }, 
  imageStyle: {
    width: width, 
    height: width
  },
  textContainer: {
    width: width, 
    height: 85, 
    alignItems: 'center',
    justifyContent: 'center'
  },
});
