import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var {height, width} = Dimensions.get('window')

const Images = [
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg", id: 1 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg", id: 2 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg", id: 3 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg", id: 1 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg", id: 2 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg", id: 3 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg", id: 1 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg", id: 2 },
  { uri: "https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg", id: 3 },

]
export default class ImageCarousel extends Component {
  
  render () {
    return (
        <Carousel
          sliderWidth={width}
          itemWidth={width}
        >
          {Images.map((image)=>{
            return(
              <View style={styles.imageContainer} key={image.id}>
                <Image 
                  source={{uri: image.uri }} 
                  style={styles.imageStyle}                 
                />
                <View style={styles.textContainer}>
                  <Text style={{fontSize: 12}}>
                    {image.id}
                  </Text>
                </View>
              </View>
            )
          })}
        </Carousel>

    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C3C4C4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    elevation: .4,
  }, 
  imageStyle: {
    width: width, 
    height: width
  },
  textContainer: {
    width: width, 
    height: 100, 
    alignItems: 'center',
    justifyContent: 'center'

  },
});
