import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Content,Left,Right,Body } from "native-base";
import styles from './StyleSignInUp';
import Icon from 'react-native-vector-icons/FontAwesome5';
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "10%",
    fontSize: 15,
    marginTop: "5%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 20 }
});

//Sign Up Success trang 137
export default class SUpSuccess extends React.Component {
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
            
                <Text style={{ fontSize: 20,  fontWeight: "bold", }}>Sign In</Text>
            </Body>
           
            </Header>
      <Content>
      <View style={styles.container}>
          <View style={styles.ImgTitle}>
            <Image source={require("./imgSignUp/Group3127.png")} />
            <Image source={require("./imgSignUp/Group3128.png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>Thank You !</Title>
          <View style={{ marginVertical: "10%", alignItems: "center" }}>
            <Text>You've successfully created an account.</Text>
            <Text numberOfLines={3} style={styleSuccess.Text}>
              Plese take a moment to verify your phone number.
              <Text style={{ color: "#2f89fc" }}>
                This help us confirm your identity and secure your account.
              </Text>
            </Text>
          </View>
          <View style={[styles.SignIn, { marginTop: "30%" }]}>
            <Button full style={styles.btnSignIn} onPress={()=>{this.props.navigation.navigate('AppSercurity')}}>
              <Text style={[styles.btnTextSignIn]}>Continue</Text>
            </Button>
          </View>
        </View>
      </Content>
        
      </Container>
    );
  }
}
