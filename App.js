import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import{ createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home';
import FavouriteScreen from './favourite';
import ProfileScreen from './profile';


const tabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={22} />
      )
    }

  },
  Favourite:{ screen: FavouriteScreen,
    navigationOptions: {
      tabBarLabel: 'Favourite',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={22} />
      )
    }

  },
  Profile: { screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={22} />
      )
    }

  }, 
    
  

});

export default createAppContainer (tabNavigator)


