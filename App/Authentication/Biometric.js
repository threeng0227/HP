import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Content,Left,Body } from "native-base";
import styles from "../User/SignIn_SignUp/StyleSignInUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { white } from "ansi-colors";
const styleSuccess = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "7%",
    fontSize: 15,
    marginTop: "3%"
  },
  TitleThank: { color: "#2f89fc", fontSize: 22, marginVertical: "5%" }
});
                                                // Biomytric trang 72
export default class Biometric extends React.Component {
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
            <Image source={require("./ImgAuth/Union2.png")} />
          </View>
          <Title style={styleSuccess.TitleThank}>Biometric</Title>
          <View style={{ alignItems: "center" }}>
            <Text style={styleSuccess.Text}>
              Now you can user Biometric on your device to quickly access the
              HarmonyPay App.
            </Text>
          </View>
          <View style={[styles.SignIn, { marginTop: "45%",flexDirection:'column',justifyContent:'space-around',height:250 }]}>
            <Button full style={styles.btnSignIn}>
              <Text style={[styles.btnTextSignIn]}>Enable Biometric</Text>
            </Button>
            <Button
              full
              bordered
              style={styles.btnSignIn}
              onPress={()=>{this.props.navigation.navigate('EnterPinCode')}}
            >
              <Text
                style={[
                  styles.btnTextSignUp,
                  { borderBottomColor: "white", marginLeft: 0 }
                ]}
              >
                Using PIN code
              </Text>
            </Button>
          </View>
        </View>
       </Content>
        
      </Container>
    );
  }
}
