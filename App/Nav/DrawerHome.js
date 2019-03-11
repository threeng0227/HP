import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from '../../Appointments/Home';
import WishList from '../../Appointments/WishList';
import Stores from '../../Appointments/Store';
import Appointments from '../../Appointments/Appointment'
import P2P from '../../Appointments/P2P'
import HeaderApp from '../../Appointments/HeaderApp';
import Menu from '../../Appointments/Menu';
import Favories from '../../Appointments/Favories';
import SettingAccount from '../../Appointments/SettingAccount';
import AboutHamony from '../../Appointments/AboutHamony'
import AboutUs from '../../App/About/AboutUs';
import ContactUs from '../../App/About/ContactUs';
import HelpFeedback from '../../App/About/HelpFeedback';
import AboutHarmonyList from '../../App/About/AboutHarmonyList';

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

const HamonyProject = createStackNavigator(
    {
        myhome: { screen: Home },

        headerapp: { screen: HeaderApp }
    }
)

const BottomProject = createBottomTabNavigator({
    Home: { screen: HamonyProject },
    Store: { screen: Stores },
    Appointments: { screen: Appointments },
    P2P: {
        screen: P2P
    }

})


const MenuNavigation = createDrawerNavigator({
    Home: { screen: BottomProject },
    wishlist: { screen: WishList },
    favories: { screen: Favories },
    abouthamony: { screen: AboutHarmonyStack },
    settingaccount: { screen: SettingAccount }
}, {
        contentComponent: props => < Menu {...props} />,
        drawerPosition: 'right',

    },

)
export default createAppContainer(MenuNavigation);