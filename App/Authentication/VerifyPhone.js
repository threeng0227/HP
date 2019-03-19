import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Input,
  Label,
  Item,
  Form,
  Content,Left,Right,Body
} from "native-base";
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
                                  //Verify Phone number trang 128
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop:'3%'
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});
export default class VerifyPhone extends React.Component {
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
            <Image source={require("./ImgAuth/PhoneVerify.png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>Verify Phone number</Title>
          <View style={{ alignItems: "center" }}>
            <Text style={styleSuccess.Text}>
              A verifycation code has been sent to
            </Text>
            <Text style={styleSuccess.Text}>
                1-800-123-4567
            </Text>
          </View>
          <View style={{ marginTop: '10%', width: "90%" }}>
            <Form>
              <Item stackedLabel>
                <Label>Enter code to continue</Label>
                <Input
                  textContentType={"telephoneNumber"}
                  keyboardType="numeric"
                />
              </Item>
            </Form>
          </View>
          <View style={[styles.SignInWith, { width:230 }]}>
              <Text>Didn't receve the code?</Text>
              <Button transparent>
                  <Text style={[styles.btnTextSignUp,{borderBottomWidth : 0}]} >
                      Resend
                  </Text>
              </Button>
          </View>
          <View style={[styles.SignIn, { marginTop: "18%" }]}>
            <Button full style={styles.btnSignIn} onPress={()=>{this.props.navigation.navigate('SetupPinOrBiometric')}}>
              <Text style={[styles.btnTextSignIn]}>Verify</Text>
            </Button>
          </View>
        </View>
        </Content>
        
      </Container>
    );
  }
}
