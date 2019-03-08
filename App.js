/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Spa from './Appointments/HamonySpa';
import Stores from './Appointments/Stores';
import SpaDetails from './Appointments/HamonySpaDetails';
import Gift from './Appointments/Gift';
import Home from './Appointments/Home';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HamonyProject=createStackNavigator(
  {
    home:{screen: Home},
    spa:{screen: Spa},
    spadetails:{screen: SpaDetails},
    gift:{screen:Gift},
    store:{screen:Stores}
    
  }
)
export default createAppContainer(HamonyProject);



