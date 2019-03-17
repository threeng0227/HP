import React, { Component } from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity } from "react-native";
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
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
                <Left>
            
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Home</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

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
            <Text style={{ fontSize: 22, padding: "3%" }}>$ 91.00</Text>
          </Left>
          <Right>
            <Button style={home.btnPayNow} onPress={()=>{this.props.navigation.navigate('ScanQR')}}>
              <Text style={home.Btn_Text}>Pay Now</Text>
              
            </Button>
          </Right>
         
        </View>
        
        </Content>
       
       
      </Container>
    );
  }
}