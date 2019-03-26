import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity ,Image,ImageBackground} from "react-native";
import {
  Header, Content,Title,Input, Container, Badge, Label,Button,Grid,Row,Left,Right,Body
} from "native-base";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
                                              // Enter Pin Code trang 134
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  InutNumber :{
    borderRadius:20,
    maxWidth : 40,height:40,
    borderWidth : 0.5,
    textAlign:'center'
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});
export default class NewPinCode extends React.Component {
  render() {
    return (
      <Container>
       <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.navigate('settingaccount')}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Settings</Text>
                 
                 
           
            </Body>
            <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('../images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>

            <TouchableOpacity style={{paddingLeft:'25%'}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <View style={{flexDirection:'column',justifyContent: 'center',flex:1, alignItems:'center',}}>
            <Image source={require('../images/changepinsucces.png')}></Image>
            <Title style={styleSuccess.TitleThank}>
           PIN Code has been changed!
          </Title>
        </View>
     
      </Container>
    );
  }
}
