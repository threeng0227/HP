import React, { Component } from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity,ImageBackground } from "react-native";
import {
  Footer,
  Header,
  Button,
  Container,
  Left,
  Right,
  Badge,Body, Content } from "native-base";
  import Ic from 'react-native-vector-icons/FontAwesome';
  import Icon from 'react-native-vector-icons/FontAwesome5';
   import Ionicons from 'react-native-vector-icons/Ionicons';
   

const home = StyleSheet.create({
  BgImg: {
    flex: 4.8,
    //marginVertical: "7%",
    width: "92%",
    margin: '4%'
  },
  LayoutBottom: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: "3%"
  },
  btnPayNow: {
    width: 150,
    justifyContent: "center",
    height: 50,
    borderRadius: 6
  },
  Btn_Text: { fontSize: 17, color: "white", fontWeight: "600", marginLeft: 30 },
  btn_Badge: {
    borderRadius: 20,
    width: 20,
    height: 20,
    alignSelf: "flex-start",
    marginLeft: 23
  }
});

export default class Home extends Component {
  constructor (props){
    super(props);
    this.state={
      Notification:1,
        
      Credit:'100.00'
      }
     
  }

  render() {
    
  
    return (
      <Container>
        <Header style={{ backgroundColor: "white"}} >
                <Left>
            
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Home</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('./images/bell.png')} style={{width:18,height:20}}>
           <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
    }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>
           
            
           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>  
        <Content>
        <View >
        <Image
          source={require('../App/User/SignIn_SignUp/imgSignUp/MainIndex.png')}
          style={home.BgImg}
        /> 
        </View>
      
        <View style={home.LayoutBottom}>
          <Left>
            <Text>Your balance</Text>
            <Text style={{ fontSize: 22, padding: "3%" }}>$ {this.state.Credit}</Text>
          </Left>
          <Right>
            <Button style={home.btnPayNow} onPress={()=>{this.props.navigation.navigate('InvoiceDetail')}}>
              <Text style={home.Btn_Text}>Pay Now</Text>
              <Badge style={home.btn_Badge} danger>
                <Text style={{ color: "white" }}>{this.state.Notification}</Text>
              </Badge>
            </Button>
          </Right>
         
        </View>
        
        </Content>
       
       
      </Container>
    );
  }
}