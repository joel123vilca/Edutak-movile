import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArtistList from './ArtistList';
import {getArtists} from './api-client';

export default class HomeView extends Component<Props> {
    state = {
      artists: []
    }
    componentDidMount(){
      getArtists()
      .then(data=> this.setState({ artists: data }))
    }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
      <ArtistList artists={artists}/>
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
