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
  Content,Left,Right,Body
} from "native-base";
                                          //Check Email trang 33
import styles from "./StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  TitleThank: { color: "black", fontSize: 22, marginVertical: "3%" }
});
export default class CheckEmail extends React.Component {
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
            
                <Text style={{ fontSize: 20,  fontWeight: "bold", }}>Forgot Password</Text>
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
            <Title style={styleSuccess.TitleThank}>Email sent !</Title>
            <Text numberOfLines={3} style={[styleSuccess.Text,{color:'black'}]}>
              We've sent you an email with a link to reset your password.
            </Text>
            <View style={[styles.SignIn, { marginTop: "15%" }]}>
              <Button full style={styles.btnSignIn} onPress={()=>alert.alert("We has been sent code into your email . Please check your email")} >
                <Text style={[styles.btnTextSignIn]}>Check Email</Text>
              </Button>
              <Button transparent style={{ alignSelf: "center" }} onPress={()=>{this.props.navigation.navigate('signin')}}>
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
