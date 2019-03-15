/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import {createDrawerNavigator,createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import Home from './Appointments/Home';
import WishList from'./Appointments/WishList';
import Stores from './Appointments/Store';
import Appointment from './Appointments/Appointment';
import P2P from './Appointments/P2P';
import Menu  from'./Appointments/Menu';
import Favories from './Appointments/Favories';
import SettingAccount from './Appointments/SettingAccount';
import PersonalInfo from './Appointments/Personalinfo';
import AboutUs from './App/About/AboutUs';
import ContactUs from './App/About/ContactUs';
import HelpFeedback from './App/About/HelpFeedback';
import AboutHarmonyList from './App/About/AboutHarmonyList';
import MoreSetting from './Appointments/Settings/HamonyAccount';
import AddBankAndCard from './Appointments/Settings/AddBankAndCard';
import BankAccountAdd from './Appointments/Settings/BankAccountAdd';
import BankAccountDetail from './Appointments/Settings/BankAccountDetail';
import BankAccount from './Appointments/Settings/BankAccount';
import BankAndCard2 from './Appointments/Settings/BankAndCard2';
import BankAndCardAdd from './Appointments/Settings/BankAndCardAdd';
import BankAndCard from './Appointments/Settings/BankAndCard';
import CreditCardDetail from './Appointments/Settings/CreditCardDetail';
import CreditCard from './Appointments/Settings/CreditCard';
import WishListFavories from'./Appointments/WishListFavories';
import AppointmentComfirm from './Appointments/AppointmentComfirm';
import AppointmentUnComfirm from'./Appointments/AppointmentUnConfirm';
import BookProcess1 from './Appointments/BookAppointments/BookProcess1';
import BookProcess2 from './Appointments/BookAppointments/BookProcess2';
import BookProcess3 from './Appointments/BookAppointments/BookProcess3';



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
   PersonalInfo:{screen:PersonalInfo},
    wishlist:{screen: WishList},
    favories:{screen: Favories},
    moresetting:{screen:MoreSetting},
   AddBankAndCard:{screen:AddBankAndCard} ,
   BankAccountAdd:{screen: BankAccountAdd} ,
   BankAccountDetail:{screen: BankAccountDetail} ,
   BankAccount:{screen: BankAccount} ,
   BankAndCard2:{screen: BankAndCard2} ,
   BankAndCardAdd:{screen: BankAndCardAdd} ,
   CreditCardDetail:{screen: CreditCardDetail} ,
   CreditCard:{screen: CreditCard} ,
   BankAndCard:{screen: BankAndCard} ,
   settingaccount:{screen:SettingAccount}  ,
   WishListFavories:{screen:WishListFavories},
   AppointmentComfirm:{screen:AppointmentComfirm},
   Appointment:{screen:Appointment},
   AppointmentUnConfirm:{screen:AppointmentUnComfirm},
   BookProcess1:{screen:BookProcess1},
   BookProcess2:{screen:BookProcess2},
   BookProcess3:{screen:BookProcess3},
   abouthamony: {
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
    
}
)

const BottomProject =createBottomTabNavigator({
  Home:{screen: HamonyProject,
    navigationOptions:{
        
        tabBarIcon:({tintColor})=>(<Image source={require('./Appointments/images/trangchu.png')} style={{tintColor:tintColor}} style={{tintColor:tintColor}}/>),
        
        },
        },
    Store:{screen: Stores,
         navigationOptions:{
            tabBarIcon:({tintColor})=>(<Image source={require('./Appointments/images/Storeinactive.png')} style={{tintColor:tintColor}}/>),
          
        }},
  Appointment:{screen:Appointment,
    navigationOptions:{
        tabBarIcon:({tintColor})=>(<Image source={require('./Appointments/images/Appointment.png')} style={{tintColor:tintColor}}/>),
       
          
        }},
  P2P:{
    screen: P2P,
    navigationOptions:{
        tabBarIcon:({tintColor})=>(<Image source={require('./Appointments/images/Gifthome.png')} style={{tintColor:tintColor}}/>),
          
        }},       
}, {
    tabBarOptions:{
        activeTintColor:"#004ba0",
        inactiveTintColor:"#9499b7",
        labelStyle:{
            fontSize:13
        },
        style:{
            height:60,
            borderColor:'lightgray',
            borderTopWidth:2,
      
        },
        tabStyle:{
                borderRightWidth:2,
                borderColor:'lightgray',
                width:60
        }
    }
})

/* const TabNavigator2 = createStackNavigator({
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
); */
/* const AboutHarmonyStack = createAppContainer(TabNavigator2); */


const MenuNavigation = createDrawerNavigator({ 
  Home:{screen:BottomProject},
  wishlist:{screen: WishList},
  favories:{screen: Favories},
     abouthamony: { screen: AboutHarmonyList},
     
  settingaccount:{screen:SettingAccount}  
 },{
  contentComponent: props =>< Menu {...props}/>,
   drawerPosition:'right',
  
 },

)

export default createAppContainer(MenuNavigation);