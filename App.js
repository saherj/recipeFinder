import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import{ createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from './home';
import FavouriteScreen from './favourite';
import ProfileScreen from './profile';


const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Favourite: FavouriteScreen,
  Profile: ProfileScreen
});

export default createAppContainer (tabNavigator)


