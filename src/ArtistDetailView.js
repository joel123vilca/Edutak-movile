import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArtistBox from './ArtistBox';
import {getArtists} from './api-client';

export default class ArtistDetailView extends Component<Props> {


  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
      <ArtistBox artist={artist}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'lightgray',
  }
});
