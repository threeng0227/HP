import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import { Container, Header, Form, Item, Input, Button } from "native-base";
import Modal from "react-native-modal";
import styles from "./StyleSignInUp";
//Modal : Terms & Conditions

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false
    };
  }
  ShowModal = () => {
    this.setState({
      openModal: !this.state.openModal
    }); 
  };
  CloseModal =() => {
    this.setState({
      openModal : !this.state.openModal
    })
  }
  render() {
    return (
      <Container>
        <Header transparent />
        <View style={styles.container}>
          <View style={styles.ImgTitle}>
            <Image source={require("./imgSignUp/Group3127.png")} />
            <Image source={require("./imgSignUp/Group3128.png")} />
          </View>
          <Form style={styles.FormLogin}>
            <Item style={{ marginBottom: 20 }}>
              <Input
                placeholder="Phone Number"
                placeholderTextColor={"#d9d9d9"}
                textContentType={"telephoneNumber"}
                style={{ fontSize: 15 }}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                placeholderTextColor={"#d9d9d9"}
                textContentType={"password"}
                secureTextEntry={true}
                style={styles.fontSizeInPut}
              />
            </Item>
          </Form>
          <View style={styles.btnForgot}>
            <Button transparent>
              <Text style={{ color: "#1cb3c8", fontSize: 15 }}>
                Forgot Password?
              </Text>
            </Button>
          </View>
          <View style={styles.SignIn}>
            <Button full style={styles.btnSignIn} onPress={this.ShowModal}>
              <Text style={styles.btnTextSignIn}>Sign In</Text>
            </Button>
          </View>
          <Modal
            style={{ marginVertical:'10%'}}
            isVisible={this.state.openModal}
          >
            <View style={{ flex : 1 }}>
              <Button full onPress={this.CloseModal}>
                <Text>Close</Text>
              </Button>
            </View>
          </Modal>
          <View style={[styles.SignInWith, { marginTop: "10%" }]}>
            <View style={styles.Divide} />
            <Text style={styles.TextDivide}>Or sign in with</Text>
            <View style={styles.Divide} />
          </View>
          <View style={[styles.SignInWith, { width: 300 }]}>
            <Button transparent>
              <Image source={require("./imgSignUp/facebook.png")} />
            </Button>
            <Button transparent>
              <Image source={require("./imgSignUp/twitter.png")} />
            </Button>
            <Button transparent>
              <Image source={require("./imgSignUp/Gmail1.png")} />
            </Button>
          </View>
          <View style={[styles.SignInWith, { width: 300 }]}>
            <Text>Don't have an account?</Text>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("signup")}
            >
              <Text style={styles.btnTextSignUp}>Sign Up</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
