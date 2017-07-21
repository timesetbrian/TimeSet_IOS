import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';


const data = [1, 2, 3, 4]

export default class ImageCarouselList extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data)
  }

  renderRow(library) {
    return <ListItem library={library}/>
  }

  render () { 
    return (
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}