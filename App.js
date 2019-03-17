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
//Footer
import Home from './Appointments/Home';
import Appointment from './Appointments/Appointment';
import P2P from './Appointments/P2PHome';
import Menu  from'./Appointments/Menu';


//About Harmony
import AboutUs from './App/About/AboutUs';
import ContactUs from './App/About/ContactUs';
import HelpFeedback from './App/About/HelpFeedback';
import AboutHarmonyList from './App/About/AboutHarmonyList';
//Setting
import SettingAccount from './Appointments/SettingAccount';
import PersonalInfo from './Appointments/Personalinfo';
import MoreSetting from './Appointments/Settings/HamonyAccount';
import AddBankAndCard from './Appointments/Settings/AddBankAndCard';
import BankAccountAdd from './Appointments/Settings/BankAccountAdd';
import BankAccountDetail from './Appointments/Settings/BankAccountDetail';
import BankAccount from './Appointments/Settings/BankAccount';
import BankAndCard2 from './Appointments/Settings/BankAndCard2';
import BankAndCardAdd from './Appointments/Settings/BankAndCardAdd';
import BankAndCard from './Appointments/Settings/BankAndCard';
import CreditCardDetail from './Appointments/Settings/CreditCardDetail';
import Favories from './Appointments/Favories';
import CreditCard from './Appointments/Settings/CreditCard';
import WishList from'./Appointments/WishList';
import WishListFavories from'./Appointments/WishListFavories';
//Appointments
import AppointmentComfirm from './Appointments/AppointmentComfirm';
import AppointmentUnComfirm from'./Appointments/AppointmentUnConfirm';
//Booking

import BookProcess1 from './Appointments/BookAppointments/BookProcess1';
import BookProcess2 from './Appointments/BookAppointments/BookProcess2';
import BookProcess3 from './Appointments/BookAppointments/BookProcess3';
//Stores

import HomeStore from './App/Stores/HomeStore';
import MainStores from './App/Stores/MainStore';
import TabStores from'./App/Stores/TabStores';
import Pedicure from'./App/Stores/Pedicure';
import HomeTabStore from'./App/Stores/HomeStore';
// Invoice Details
import InvoiceDetail from './Appointments/InvoiceDetail';
import InvoiceDetail2 from './Appointments/InvoiceDetail2';
//PayInvoice
import PayInvoice from'./Component/PayInvoice';
import Home2 from './Component/Home2';
import ScanQR from './Component/ScanQR';
import TransactionSend from'./Component/TransactionSend';
import Tranfer9 from './Component/Transfer9';
//ReloadAccount
import ReloadAccount from './App/SelectedAccount/ReloadAccount';
import ReloadAccountStep2 from './App/SelectedAccount/ReloadAccountStep2';
import TransactionSend2 from './Component/TransactionSend2';
import SelectAccounts from './Component/SelectAccounts';
import SelectAccount1 from './Component/SelectAccount1';
import Transferbeing from './Component/Transferbeing';
import TransactionSuccesFull from './Component/TransactionSuccesFull';

//Gift
import SendMoney914 from'./Component/SendMoney914';
import CameraGift from'./Component/CameraGift';
import Gift from'./Component/Gift';
import GiftCardContactManually from'./Component/GiftCardContactManually';
import GiftCardHasSent from'./Component/GiftCardHasSent';
import GiftCardProcess1 from'./Component/GiftCardProcess1';
import GiftCongratulation from'./Component/GiftCongratulation';
import GiftSendCancel from'./Component/GiftSendCancel';
import NextGiftCamera from'./Component/NextGiftCamera';
import NextGiftCamera1 from'./Component/NextGiftCamera1';
import Notificationnn from'./Component/Notificationnn';
import P2PNone from'./Component/P2P';
import P2PGifttbao from'./Component/P2PGifttbao';
import P2PMeryC from'./Component/P2PMeryC';
import PayRquest from'./Component/PayRquest';
import PayTransactionSuccess from'./Component/PayTransactionSuccess';
import RequestSentSuccess from'./Component/RequestSentSuccess';
import ReviewGift from'./Component/ReviewGift';
import Tranfer300 from'./Component/Tranfer300';
import TranferNext from'./Component/TranferNext';
import TransferTT from'./Component/TransferTT';
import TranferSendMoney from'./Component/TranferSendMoney';
import TransactionSuccess from'./Component/TransactionSuccess';
import TransactionSend3 from'./Component/TransactionSend3';


//Money Process
import Process1SendMoney from'./Component/Process1SendMoney';
import Process2SendMoney from'./Component/Process2SendMoney';
import Process3Send from'./Component/Process3Send';
import Process3Rquest from'./Component/Process3Rquest';
import SelectSendRquest1 from'./Component/SelectSendRquest1';
import SelectSendRquest2 from'./Component/SelectSendRquest2';
import Sendmoney from'./Component/Sendmoney';
import SendMoney864 from'./Component/SendMoney864';
import SendmoneyunPaid from'./Component/SendmoneyunPaid';


//TabGift
import tabsend914 from'./Component/tabsendrequestmoney/tabsend914';
import tabrequest from'./Component/tabsendrequestmoney/tabrequest';

//USER==========================
import Welcome from "./App/User/SignIn_SignUp/Welcome";
import MainWalkCar from "./App/User/Walk_Carousel/MainWalkCar";
import SignIn from "./App/User/SignIn_SignUp/SignIn";
import SignUp from './App/User/SignIn_SignUp/SignUp';
import { InputGroup } from 'native-base';
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
     Home:{screen: Home},
      //Appointment
      AppointmentComfirm:{screen:AppointmentComfirm},
      Appointment:{screen:Appointment},
      AppointmentUnConfirm:{screen:AppointmentUnComfirm},
      //Setting
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
     //Gift
     SendMoney914 :{screen:SendMoney914},
    CameraGift :{screen:CameraGift},
    Gift :{screen:Gift},
    GiftCardContactManually :{screen:GiftCardContactManually},
    GiftCardHasSent:{screen:GiftCardHasSent},
    GiftCardProcess1 :{screen:GiftCardProcess1},
    GiftCongratulation :{screen:GiftCongratulation},
    GiftSendCancel :{screen:GiftSendCancel},
    NextGiftCamera :{screen:NextGiftCamera},
    NextGiftCamera1 :{screen:NextGiftCamera1},
    Notificationnn :{screen:Notificationnn},
    P2PNone :{screen:P2P},
    P2PGifttbao :{screen:P2PGifttbao},
    P2PMeryC :{screen:P2PMeryC},
    PayRquest :{screen:PayRquest},
    PayTransactionSuccess :{screen:PayTransactionSuccess},
    RequestSentSuccess :{screen:RequestSentSuccess},
    ReviewGift :{screen:ReviewGift},
    Tranfer300 :{screen:Tranfer300},
    TranferNext :{screen:TranferNext},
    TransferTT :{screen:TransferTT},
    //Money Process
    Process1SendMoney :{screen:Process1SendMoney},
    Process2SendMoney :{screen:Process2SendMoney},
    Process3Send:{screen:Process3Send},
    Process3Rquest:{screen:Process3Rquest},
    SelectSendRquest1 :{screen:SelectSendRquest1},
    SelectSendRquest2:{screen:SelectSendRquest2},
    Sendmoney :{screen:Sendmoney},
    SendMoney864 :{screen:SendMoney864},
    SendmoneyunPaid :{screen:SendmoneyunPaid},
    TranferSendMoney :{screen:TranferSendMoney},
    TransactionSend3 :{screen:TransactionSend3},
    
    //TabGift
    tabrequest:{screen:tabrequest},
    tabsend914:{screen:tabsend914},
    //Invoice Details
    InvoiceDetail:{screen:InvoiceDetail},
    InvoiceDetail2:{screen:InvoiceDetail2},
    //ReloadAccount
    TransactionSend2:{screen:TransactionSend2},
    SelectAccounts:{screen:SelectAccounts},
    SelectAccount1:{screen:SelectAccount1},
    Transferbeing:{screen:Transferbeing},
    TransactionSuccess:{screen:TransactionSuccess},
    TransactionSuccesFull:{screen:TransactionSuccesFull},
    //PayVoice
    PayInvoice:{screen:PayInvoice},
     Home2:{screen:Home2},
    ScanQR:{screen:ScanQR},
    TransactionSend:{screen:TransactionSend},
    Transfer9:{screen:Tranfer9},
   //Select Account
   ReloadAccount:{screen:ReloadAccount},
   ReloadAccountStep2:{screen:ReloadAccountStep2},
   //Booking Appointment
  
   BookProcess1:{screen:BookProcess1},
   BookProcess2:{screen:BookProcess2},
   BookProcess3:{screen:BookProcess3},
   //Store
   HomeStore:{screen:HomeStore},
   MainStores:{screen: MainStores},
   TabStores:{screen:TabStores},
    Pedicure:{screen:Pedicure},
    //About Harmony
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
    Store:{screen: MainStores,
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