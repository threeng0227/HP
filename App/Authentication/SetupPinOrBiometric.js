import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Content,Left,Body
} from "native-base";
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
                                              //Your phone number verified trang 126
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});
export default class SetupPinOrBiometric extends React.Component {
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
            <Image source={require("./ImgAuth/Phone...png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>
            Your phone number is verified !
          </Title>
          <View style={{ alignItems: "center" }}>
            <Text style={styleSuccess.Text}>
              Please setup PIN code and Biometric for quick login.
            </Text>
            <View style={[styles.SignInWith,{width:'100%',marginTop:'7%'}]}>
              <Image source={require("./ImgAuth/Union.png")} />
              <Image source={require("./ImgAuth/Pincode.png")} />
            </View>
          </View>
          <View style={[styles.SignIn, { marginTop: "30%" }]}>
            <Button full style={styles.btnSignIn} onPress={()=>{this.props.navigation.navigate('Biometric')}}>
              <Text style={[styles.btnTextSignIn]}>Continue</Text>
            </Button>
          </View>
        </View>
       </Content>
        
      </Container>
    );
  }
}
