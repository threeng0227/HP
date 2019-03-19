import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity ,Image,KeyboardAvoidingView} from "react-native";
import {
  Header, Content,Title,Input, Container, Form, Label,Button,Grid,Row,Left,Right,Body
} from "native-base";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../App/User/SignIn_SignUp/StyleSignInUp";
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
            <Text><Ic name="bell" size={20}></Ic></Text>

            <TouchableOpacity style={{paddingLeft:'25%'}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <KeyboardAvoidingView  style={{flex:1}} keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.ImgTitle}>
            <Image source={require("../../App/Authentication/ImgAuth/ConfirmPin.png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>
           Enter New Pin Code
          </Title>
          <View style={{ alignItems: "center",marginVertical:'5%' }}>
            <View style={[styles.SignInWith,{width:'65%'}]}>
              <Input style={styleSuccess.InutNumber} keyboardType="numeric"/>
              <Input style={styleSuccess.InutNumber} keyboardType="numeric"/>
              <Input style={styleSuccess.InutNumber} keyboardType="numeric"/>
              <Input style={styleSuccess.InutNumber} keyboardType="numeric"/>
            </View>
          </View>
          <View style={[styles.SignIn,{marginTop:'3%'}]} >
            <Button full style={styles.btnSignIn}  onPress={()=>{this.props.navigation.navigate('ConfirmPinCode')}}>
              <Text style={[styles.btnTextSignIn]}>Next</Text>
            </Button>
          </View>
        </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
