import React, {Component} from 'react';
import { Container, Header, Left, Button, Body, Right, Image, View, List, ListItem, Content} from 'native-base';
import { Text, TouchableOpacity, WebView, Alert} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import AboutUs from '../App/About/AboutUs';
import AboutHarmonyList from '../App/About/AboutHarmonyList';


const TabNavigator2 = createStackNavigator({
    AboutHarmonyList: {
        screen: AboutHarmonyList
    },
    AboutUs: {
        screen: AboutUs
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

export default class AboutHamony  extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
       

        return (
            <AboutHarmonyStack/>
            
        );
    }
}