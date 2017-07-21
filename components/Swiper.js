import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}


const usr_images = [
  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg',
  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg',
]

export default class extends Component {
  render () {
    return (
      <View>
        <Swiper style={styles.wrapper} height={300} horizontal>
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />
          <Image style={{flex: 1}} source={{url:  'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'}} />
          <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'}} />
           <Image style={{flex: 1}} source={{url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'}} />

        </Swiper>


      </View>
    )
  }
}