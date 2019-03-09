import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer,createDrawerNavigator,createBottomTabNavigator } from "react-navigation";

import Home from './Home';
import WishList from './WishList';
import Menu from './Menu';
import Stores from './Store'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HamonyProject=createStackNavigator(
  {
    myhome:{screen: Home},
    Stores:{screen: Stores},
   
  }
)
const BottomProject =createBottomTabNavigator({
  Home:{screen: HamonyProject},
  Stores:{screen: Stores},
    
})


 const MenuNavigation= createDrawerNavigator({ 
  Home:{screen:BottomProject}
  
 },
 {
  contentComponent :props =>< Menu {...props}/>
 })
export default createAppContainer(MenuNavigation);