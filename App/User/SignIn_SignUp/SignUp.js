import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Header,
  Content,
  Title,
  Input,
  Item,
  Container,
  Form,
  Label,
  Button,Grid,Row,Left,Right,Body
} from "native-base";
import styles from "./StyleSignInUp";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from 'react-native-vector-icons/FontAwesome5';
const styleSUp = StyleSheet.create({
  Icon: {
    fontSize: 6,
    color: "red",
    position: "absolute",
    top: "9%"
  },
  FormSignUp: {
    width: "95%",
    height: "60%",
    justifyContent: "space-around"
  },
  GridYourName :{
    flexDirection:'row',justifyContent:'space-around'
  }
});
export default class SignUp extends Component {
  render() {
    return (
      <Container>
         <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icons size={20}  name="chevron-left"></Icons> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2,marginLeft:'-10%'}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold", }}>Sign Up</Text>
            </Body>
           
            </Header>
        <Content padder>
          <Title style={{ color: "black", marginBottom: "7%" }}>
            Create an account
          </Title>
          <Form style={styleSUp.FormSignUp}>
            <Grid style={styleSUp.GridYourName}>
                
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >Your Name</Label>
                <Icon
                name="asterisk"
                style={[
                  styleSUp.Icon,
                  {
                    left: "58%"
                  }
                ]}
              />
                  <Input placeholder="First Name" placeholderTextColor={"#d9d9d9"} style={styles.fontSizeInPut} />
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label/>
                  <Input placeholder="Last Name" placeholderTextColor={"#d9d9d9"} style={styles.fontSizeInPut} />
                </Item>
              </Row>
            </Grid>
            <Item stackedLabel>
              <Label>Email Address</Label>
              <Icon
                name="asterisk"
                style={[
                  styleSUp.Icon,
                  {
                    left: "35%"
                  }
                ]}
              />
              <Input textContentType="emailAddress" style={styles.fontSizeInPut} />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Icon
                name="asterisk"
                style={[
                  styleSUp.Icon,
                  {
                    left: "25%"
                  }
                ]}
              />
              <Input textContentType="password" secureTextEntry={true} />
            </Item>
            <Item stackedLabel>
              <Icon
                name="asterisk"
                style={[
                  {
                    left: "45%"
                  },
                  styleSUp.Icon
                ]}
              />
              <Label>Confirm Password</Label>
              <Input textContentType="password" secureTextEntry={true} />
            </Item>
          </Form>
          <View style={{ paddingHorizontal: "5%", marginTop: 70 }}>
            <Button full style={styles.btnSignIn} onPress={()=>{this.props.navigation.navigate('SUpSuccess')}}>
              <Text style={styles.btnTextSignIn}>Sign Up</Text>
            </Button>
          </View>
          <View style={[styles.SignInWith, { paddingHorizontal: "20%" }]}>
            <Text>Have an account?</Text>
            <Button transparent onPress={()=>this.props.navigation.navigate('signin')}
            >
              <Text
                style={[styles.btnTextSignUp, { borderBottomColor: "white" }]}
              >
                Sign in
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
