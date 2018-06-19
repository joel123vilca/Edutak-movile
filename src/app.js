/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://ionicframework.com/docs/ionicons/
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArtistList from './ArtistList';

export default class App extends Component<Props> {
  render() {
    const artist={
      image:'https://www.ecdalliance.org/wp-content/uploads/2018/03/Edutak.png',
      name:'joel vilca',
      likes:200,
      comment:20,
    }
    const artists = Array(10).fill(artist);
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
