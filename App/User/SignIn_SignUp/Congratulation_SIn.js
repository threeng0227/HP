import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
                                //Congratulation Sign In trang 10
import {
  Container,
  Header,
  Title,
  Button,
  Content,Left,Body 
} from "native-base";
import styles from "./StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "10%" }
});
export default class Congratulation extends React.Component {
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
              <Image source={require("../Authentication/ImgAuth/Phone...png")} />
            </View>
            <Title style={styleSuccess.TitleThank}>Congratulation !</Title>
            <Text numberOfLines={3} style={[styleSuccess.Text,{color:'black'}]}>
              You've successfully set up quick sign in !
            </Text>
            
            <View style={[styles.SignIn, { marginTop: "7%" }]}>
              <Button full style={styles.btnSignIn}  onPress={()=>{this.props.navigation.navigate('InputPinCode')}}>
                <Text style={[styles.btnTextSignIn]}>Sign In</Text>
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
        </Content>
       
      </Container>
    );
  }
}
