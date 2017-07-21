import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';


const data = [1, 2, 3]

export default class ImageCarouselList extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data)
  }

  renderRow() {
    return <ListItem />
  }

  render () { 
    return (
      <ListView 
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}