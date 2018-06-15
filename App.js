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


export default class App extends Component<Props> {

  render() {
    const image = 'https://www.ecdalliance.org/wp-content/uploads/2018/03/Edutak.png';
    const name = 'joel vilca';
    const likes = 200
    const comment = 20
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
        <Image style={styles.image} source={{ uri: image}}/>
        <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <View style={styles.iconcontenedor}>
          <Icon name="ios-heart-outline" size={30} color="gray"/>
          <Text style={styles.count}>{likes}</Text>
          </View>
          <View style={styles.iconcontenedor}>
          <Icon name="ios-chatboxes-outline" size={30} color="gray"/>
          <Text style={styles.count}>{comment}</Text>
          </View>
        </View>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'lightgray',
  },
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize:20,
    marginTop: 10,
  },
  row:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginHorizontal:40,
    marginTop: 15,
  },
  iconcontenedor:{
    flex: 1,
    alignItems: 'center',
  },
  count:{
    color: 'gray',
  }

});
