import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground } from "react-native";
import {
  Header, Content,Title,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body,Badge
} from "native-base";
import styles from "../App/User/SignIn_SignUp/StyleSignInUp";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
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
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
                <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Personal Info</Text>
            </Body>
            <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('./images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>

            <TouchableOpacity style={{paddingLeft:'25%'}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <Content padder>
        <View style={{marginTop:18}}>
            <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Personal Info</Text>  
        </View>
          <Form style={styleSUp.FormSignUp}>
          
            <Grid style={styleSUp.GridYourName}>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >Firt Name</Label>
               
                  <Input  value='Jerry' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >Last Name</Label>
                  <Input   value='Nguyen' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
              </Row>
            </Grid>
            <Grid style={styleSUp.GridYourName}>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >Birthday</Label>
               
                  <Input  value='05' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label />
                  <Input   value='August' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
              </Row>
            </Grid>
            <Item stackedLabel>
              <Label>Address</Label>
              <Input   value='35246 US Hwy 19 N' textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
            </Item>
            <Item stackedLabel>
              <Label>Phone Number</Label>
              <Input  value='0123 456 789'  textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input   value='jerry.nguyen@gmail.com' textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
            </Item>
          </Form>
          <View style={{ paddingHorizontal: "5%", marginTop: 70,flex:1, justifyContent: 'center',flexDirection: 'row',alignItems: 'center',}}>
            <Button full style={{width:'50%',borderRadius:3}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Update</Text>
            </Button>
          </View>
         
        </Content>
      </Container>
    );
  }
}
