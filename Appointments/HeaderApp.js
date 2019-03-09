
import { Container, Content, Header, List, ListItem, Left, Footer, FooterTab, Body, Button, Right } from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
 import Ionicons from 'react-native-vector-icons/Ionicons';
import {  } from 'native-base';


export default class HeaderApp extends Component{
    render(){
     
        return(
            <Container>
            <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Tiêu Đề</Text>
                 
                 
           
            </Body>
            <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
            <Text><Ic name="bell" size={20}></Ic></Text>

            <TouchableOpacity style={{paddingLeft:'25%'}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
            </Container>
            
        )
    }
    
}
