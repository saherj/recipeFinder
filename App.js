import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import{ createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import DiscoverScreen from './discover';
import ProfileScreen from './profile';


const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Discover: DiscoverScreen,
  Profile: ProfileScreen

});

export default createAppContainer (tabNavigator)


