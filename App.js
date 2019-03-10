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
import PersonalInfo from './Appointments/Personalinfo'
import AboutUs from './App/About/AboutUs';
import ContactUs from './App/About/ContactUs';
import HelpFeedback from './App/About/HelpFeedback';
import AboutHarmonyList from './App/About/AboutHarmonyList';

//USER==========================
import Welcome from "./App/User/SignIn_SignUp/Welcome";
import MainWalkCar from "./App/User/Walk_Carousel/MainWalkCar";
import SignIn from "./App/User/SignIn_SignUp/SignIn";
import SignUp from './App/User/SignIn_SignUp/SignUp';
//==============================

/*==============Welcome Login================== */
const AppRoot = createStackNavigator(
    {
        welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null
            }
        },
        mainwalk: {
            screen: MainWalkCar,
            navigationOptions: {
                header: null
            }
        },
        signin: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        },
        signup: {
            screen: SignUp,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: "welcome"
    }
);
//const AppWelcome = createAppContainer(AppRoot);
/*======================================= */

const HamonyProject=createStackNavigator(
  {
    myhome:{screen: Home},
    personalinfo:{screen:PersonalInfo},
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

const TabNavigator2 = createStackNavigator({
    AboutHarmonyList: {
        screen: AboutHarmonyList
    },
    AboutUs: {
        screen: AboutUs
    },
    ContactUs: {
        screen: ContactUs
    },
    HelpFeedback: {
        screen: HelpFeedback
    }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        backBehavior: 'none'
    }
);
const AboutHarmonyStack = createAppContainer(TabNavigator2);


const MenuNavigation = createDrawerNavigator({ 
  Home:{screen:BottomProject},
  wishlist:{screen: WishList},
  favories:{screen: Favories},
     abouthamony: { screen: AboutHarmonyStack},
  settingaccount:{screen:SettingAccount}  
 },{
  contentComponent: props =>< Menu {...props}/>,
   drawerPosition:'right',
  
 },

)

export default createAppContainer(AppRoot);