import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Input,
  Label,
  Form,
  Item,
  Content,
  Left,
  Right,
  Body
} from "native-base";
//Forgot Password trang 6
import styles from "./StyleSignInUp";
import Icon from "react-native-vector-icons/FontAwesome5";
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
    height: 40,
    borderWidth: 0.5,
    textAlign: "center"
  },
  TitleThank: { color: "black", fontSize: 22, marginVertical: "3%" },
  error :{borderColor:'red'}
});
export default class ForgotPass extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      error : false,
    };
  }

/*   _SendEmail = async () => {
    let res = await fetch("http://192.168.100.148:81/api/Users", {
      method: "POST",
      body: JSON.stringify({ email: this.state.Email }),
      headers: { "Content-Type": "application/json" }
    });

  }; */

  CheckValidEmail=(text)=>{
    var typeEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    this.setState({Email : text});
    if(!typeEmail.test(this.state.Email) ){
        this.setState({error : true})
    }
    else{
      this.setState({error : false})
    }
  }
  ShowBtnSend=(value)=>{
    if(value == "" || this.state.error == true)
    {
      return true;
    }else return false;
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <View style={{ justifyContent: "center" }}>
              <Button
                transparent
                style={{ justifyContent: "center" }}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Text>
                  <Icon size={20} name="chevron-left" />
                </Text>
              </Button>
            </View>
          </Left>
          <Body
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 2,
              marginLeft: "-10%"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Forgot Password
            </Text>
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
                <Image source={require("./imgSignUp/Group3127.png")} />
                <Image source={require("./imgSignUp/Group3128.png")} />
              </View>
              <Title style={styleSuccess.TitleThank}>Forgot Password ?</Title>
              <Text
                numberOfLines={3}
                style={[styleSuccess.Text, { color: "black" }]}
              >
                Enter your email address you're using for your account below and
                we will send you a password reset link
              </Text>
              <View style={{ marginTop: "10%", width: "90%" }}>
                <Form>
                  <Item stackedLabel style={this.state.error?styleSuccess.error:null}>
                    <Label>Email Address</Label>
                    <Input textContentType={"emailAddress"} onChangeText={text=>{this.CheckValidEmail(text)}} />
                  </Item>
                </Form>
              </View>
              <View style={[styles.SignIn, { marginTop: "15%" }]}>
                <Button
                  disabled={this.ShowBtnSend(this.state.Email)}
                  full
                  style={styles.btnSignIn}
                  onPress={() => {
                    this.props.navigation.navigate("CheckEmail");
                  }}
                >
                  <Text style={[styles.btnTextSignIn]}>Send</Text>
                </Button>
                <Button
                  transparent
                  style={{ alignSelf: "center" }}
                  onPress={() => {
                    this.props.navigation.navigate("signin");
                  }}
                >
                  <Text style={[styles.btnTextSignUp]}>Back to Sign In</Text>
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}
