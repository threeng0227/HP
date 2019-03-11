import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import {
  Header, Content,Title,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body
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
export default class BankAndCard extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Settings</Text>
                 
                 
           
            </Body>
            <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
            <Text><Ic name="bell" size={20}></Ic></Text>

            <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <Content padder>
        <View style={{marginTop:18}}>
            <Text style={{fontWeight:'bold', fontSize:20}}> Bank account and cards</Text>  
        </View>
        <View style={{marginTop:18}}>
            <Text style={{ fontSize:15}}> You have not linked an account or card yet</Text>  
        </View>
        <View style={{marginTop:18, flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('AddBankAndCard')}}>
                <Ionicons name='md-add-circle' color='blue' size={25}></Ionicons>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize:15}}> Add bank account or card</Text>  
        </View>
        </Content>
      </Container>
    );
  }
}
