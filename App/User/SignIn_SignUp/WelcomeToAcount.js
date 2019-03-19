import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Content } from "native-base";
import styles from "./StyleSignInUp";
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "10%",
    fontSize: 15,
    marginTop: "5%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 22 }
});

// Welcome trang 130
export default class WelcomeToAcount extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <View style={styles.container}>
          <View style={styles.ImgTitle}>
            <Image source={require("./imgSignUp/Group3127.png")} />
            <Image source={require("./imgSignUp/Group3128.png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>Welcome Jerry Nguyen !</Title>
          <View style={{ alignItems: "center" }}>
            <Text />
            <Text numberOfLines={3} style={styleSuccess.Text}>
              Plese take a moment to verify your phone number.
              <Text style={{ color: "#2f89fc" }}>
                This help us confirm your identity and secure your account.
              </Text>
            </Text>
          </View>
          <View style={[styles.SignIn, { marginTop: "50%" }]}>
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
