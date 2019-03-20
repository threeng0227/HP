import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Container, Header, Title, Button, Input, Content,Left,Body } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";                         //Welcome Jerry Nguyen trang 135
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  InutNumber: {
    borderRadius: 20,
    maxWidth: 40,
    maxHeight: 40,
    borderWidth: 0.5,
    textAlign: "center",
    marginTop: "4%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});

export default class InputPinCode extends React.Component {
  constructor() {
    super();
    this.state = {
      code: ""
    };
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
            <Left>
           
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2,marginLeft:'-10%'}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold", }}>Sign In</Text>
            </Body>
           
            </Header>
        <Content>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps={"always"}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.ImgTitle}>
              <Image source={require("./ImgAuth/Personal.png")} />
            </View>
            <Title style={styleSuccess.TitleThank}>
              Welcome Jerry Nguyen !
            </Title>
            <Text style={{ fontSize: 15 }}>1-800-123-4567</Text>
            <View style={{ alignItems: "center", marginVertical: "5%" }}>
              <Text style={{ fontSize: 15 }}>Please input your PIN code</Text>
              <View style={[styles.SignInWith, { width: "65%" }]}>
              <SmoothPinCodeInput
                  cellStyle={{ borderRadius: 24, borderWidth: 0.5 }}
                  cellSize={37}
                  autoFocus={true}
                  cellStyleFocused={{ borderWidth: 0.5 }}
                  cellSpacing={15}
                  textStyle={{
                    fontSize: 20,
                    color: "black"
                  }}
                  onFulfill={()=>{this.props.navigation.navigate('Home')}}
                  textStyleFocused={{
                    color: "black"
                  }}
                  value={this.state.code}
                  onTextChange={code => this.setState({ code })}
                
                />
              </View>
            </View>
            <Text style={{ fontSize: 15 }}>Or</Text>
            <View style={[{ marginTop: "3%" }]}>
              <Button transparent onPress={()=>{this.props.navigation.navigate('Home')}}>
                <Image
                  source={require("./ImgAuth/Union.png")}
                  resizeMode={"contain"}
                  style={{ width: 40 }}
                />
                <Text
                  style={[styles.btnTextSignUp, { borderBottomColor: "white" }]}
                >
                  sign in with Biometric
                </Text>
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
        </Content>
       
      </Container>
    );
  }
}
