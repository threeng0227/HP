/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {createDrawerNavigator,createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import Home from './Appointments/Home';
import WishList from'./Appointments/WishList';
import Stores from './Appointments/Store';
import Appointments from './Appointments/Appointment'
import P2P from './Appointments/P2P'
import HeaderApp from'./Appointments/HeaderApp';
import Menu  from'./Appointments/Menu';
import Favories from './Appointments/Favories';
import SettingAccount from './Appointments/SettingAccount';
import AboutHamony from './Appointments/AboutHamony'
const HamonyProject=createStackNavigator(
  {
    myhome:{screen: Home},
 
    headerapp:{screen:HeaderApp}
  }
)

const BottomProject =createBottomTabNavigator({
  Home:{screen: HamonyProject},
    Store:{screen: Stores},
  Appointments:{screen:Appointments},
  P2P:{
    screen: P2P
  }
    
})


 const MenuNavigation= createDrawerNavigator({ 
  Home:{screen:BottomProject},
  wishlist:{screen: WishList},
  favories:{screen: Favories},
  abouthamony:{screen:AboutHamony},
  settingaccount:{screen:SettingAccount}  
 },{
  contentComponent: props =>< Menu {...props}/>,
   drawerPosition:'right',
  
 },

 )
export default createAppContainer(MenuNavigation);



