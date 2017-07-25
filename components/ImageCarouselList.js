import React, { Component } from 'react';
import { ListView } from 'react-native';
import ImageCarousel from './ImageCarousel';


const data = [1, 2, 3];

export default class ImageCarouselList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data);
  }

  renderRow() {
    return <ImageCarousel />;
  }

  render() { 
    return (
      <ListView 
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
