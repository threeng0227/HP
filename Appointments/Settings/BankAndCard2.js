import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,Image,ImageBackground } from "react-native";
import {
  Header, Content,Badge,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body
} from "native-base";
import styles from "../../App/User/SignIn_SignUp/StyleSignInUp";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
const styleSUp = StyleSheet.create({
  Icon: {
    fontSize: 6,
    color: "red",
    position: "absolute",
    top: "9%"
  },
  FormSignUp: {
    width: "95%",
    height: "60%",
    justifyContent: "space-around"
  },
  GridYourName :{
    flexDirection:'row',justifyContent:'space-around'
  }
});
export default class BankAndCard2 extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.navigate('myhome')}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
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

            <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}  >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <Content padder>
        <View style={{marginTop:18}}>
            <Text style={{fontWeight:'bold', fontSize:20}}> Bank account and cards</Text>  
        </View>
        <View style={{marginTop:18,flexDirection:'row'}}>
        <Button style={{height:120,width:160,
            borderRadius:3,backgroundColor:'#eee',
            borderWidth:1,borderColor:'#0069c0',
            justifyContent:'center',
            flexDirection:'column'}}>
            <Image style={{resizeMode:'stretch',width:'100%',height:120}} source={require('../images/BankAdd.png')}></Image>
        </Button>
        <Button style={{height:120,width:160,
            borderRadius:3,backgroundColor:'#eee',
            borderWidth:1,borderColor:'#0069c0',
            justifyContent:'center',
            flexDirection:'column',marginLeft:'1%'}}>
            <Image style={{resizeMode:'stretch',width:'100%',height:120}} source={require('../images/CardAdd.png')}></Image>
        </Button>
        </View>
        <View style={{marginTop:18, flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
                <Ionicons name='md-add-circle' color='blue' size={20}></Ionicons>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize:15}}> Add bank account or card</Text>  
        </View>
        </Content>
      </Container>
    );
  }
}
