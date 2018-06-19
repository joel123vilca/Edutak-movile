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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

export default class App extends Component<Props> {

  render() {
    const artist={
      image:'https://www.ecdalliance.org/wp-content/uploads/2018/03/Edutak.png',
      name:'joel vilca',
      likes:200,
      comment:20,
    }
    // const image = 'https://www.ecdalliance.org/wp-content/uploads/2018/03/Edutak.png';
    // const name = 'joel vilca';
    // const likes = 200
    // const comment = 20
    return (
      <View style={styles.container}>
      <ArtistBox artist={artist}/>
      <ArtistBox artist={artist}/>
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
