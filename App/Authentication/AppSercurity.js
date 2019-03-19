import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Input,Label,Item,Form,Left,Right,Body, Content } from "native-base";
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
  },
  TitleThank: { color: "#2f89fc", fontSize: 22,marginVertical : '5%' }
});
                                          //HarmonyPay App Ser trang 129
export default class AppSercurity extends React.Component {
  render() {
    return (
      <Container>
             <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2,marginLeft:'-10%'}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold", }}>Authentication</Text>
            </Body>
           
            </Header>
       <Content>
       <View style={styles.container}>
          <View style={styles.ImgTitle}>
            <Image source={require("./ImgAuth/PhoneSercurity.png")} />
            
          </View>
          <Title style={styleSuccess.TitleThank}>HarmonyPay App Security</Title>
          <View style={{ alignItems: "center" }}>
            
            <Text numberOfLines={3} style={styleSuccess.Text}>
              HP App now users two-factor authentication to help ensure you're only person who can access your account.
            </Text>
            <Text style={styleSuccess.Text}>Enter a phone number that can be used to verify your identity with a text message.</Text>
          </View>
          <View style={{marginTop:10,width:'90%'}}>
            <Form>
              <Item stackedLabel>
                <Label>Number Phone</Label>
                <Input textContentType={"telephoneNumber"} keyboardType="numeric"/>
              </Item>
            </Form>
          </View>
          <View style={[styles.SignIn, { marginTop: "30%" }]}>
            <Button full style={styles.btnSignIn} onPress={()=>{this.props.navigation.navigate('VerifyPhone')}}>
              <Text style={[styles.btnTextSignIn]}>Continue</Text>
            </Button>
          </View>
        </View>
       </Content>
        
      </Container>
    );
  }
}
