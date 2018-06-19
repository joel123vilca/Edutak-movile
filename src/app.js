

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import HomeView from './homeView';
import ArtistDetailView from './ArtistDetailView'

export default class App extends Component {
  render(){
    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView}/>
      </Scene>
    </Router>
  }
}
