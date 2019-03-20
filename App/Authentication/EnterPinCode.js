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
  Content,
  Left,
  Body
} from "native-base";
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import Icon from "react-native-vector-icons/FontAwesome5";
import SmoothPinCodeInput from "react-native-smooth-pincode-input"; // Enter Pin Code trang 134
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
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});
export default class EnterPinCode extends React.Component {
  constructor() {
    super();
    this.state = {
      code: ""
    };
  }
  _CheckPinCode = (pincode) => {
    if (pincode.length ==4) {
      return false
    }else 
      return true
  };
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
                  <Icon size={20} name="chevron-left" />{" "}
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
              Authentication
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
                <Image source={require("./ImgAuth/ConfirmPin.png")} />
              </View>
              <Title style={styleSuccess.TitleThank}>Enter PIN code</Title>
              <View style={{ alignItems: "center", marginVertical: "5%" }}>
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
                  textStyleFocused={{
                    color: "black"
                  }}
                  value={this.state.code}
                  onTextChange={code => this.setState({ code })}
                
                />
              </View>
              <View style={[styles.SignIn, { marginTop: "3%" }]}>
                <Button
                  full
                  style={styles.btnSignIn}
                  disabled={this._CheckPinCode(this.state.code)}
                  onPress={() => {
                    this.props.navigation.navigate("ConfirmPinCodeLogin");
                  }}
                >
                  <Text style={[styles.btnTextSignIn]}>Next</Text>
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}
