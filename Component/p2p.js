import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Title,FooterTab, Content} from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container >
        <Header style={site.header}>
          <Left >
            <Button transparent>
              <Icon name='arrow-back' style={site.header}/>
            </Button>
          </Left>
          <Body style={{margin:80}}>
            <Title style={site.header} >Gift Cards</Title>
          </Body>        
        </Header>
        <Content style={{backgroundColor:'lightgray',flex:1}}>    
        <View style={site.view}>
          <Text>ádasas</Text>
        </View>    
        <Text style={{marginLeft:14}}>You receive a Gift Card from :</Text>
        <View style={site.view1}>         
        </View> 
        <Text style={{marginLeft:14}}>Message :</Text>
        <View style={site.view1}>         
        </View>  
         <View><Button  style={site.btn}>
            <Text style={site.btn1}>Claim</Text>
          </Button></View>
         
          
               
        </Content>
        <Footer >
          <FooterTab style={{backgroundColor:'white'}}> 
            <Button vertical>
              <Icon name="home"style={site.icon} />
              <Text style={site.Text}>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="appstore" style={site.icon}/>
              <Text style={site.Text}>Stores</Text>
            </Button>
            <Button vertical >
              <Icon name="apps"style={site.icon} />
              <Text style={site.Text}>Appointment</Text>
            </Button>
            <Button vertical>
              <Icon name="gift" style={site.icon}/>
              <Text style={site.Text}>P2P</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
var site=StyleSheet.create({
  Text:{
    fontSize:10,
    color:'gray',
  },
  icon:{
    
    color:'gray',
  },
  header:{
    backgroundColor:'white',
    color:'#00BFFF',
  },
  view:{
    borderRadius: 5,
    height:150,
    backgroundColor:'white',
    margin:14
  },
  view1:{
    borderRadius: 5,
    height:60,
    backgroundColor:'white',
    margin:14
  },
  btn:{
    marginTop:10,
   backgroundColor:'#00BFFF',
  width:128,
  
  marginLeft:120,
  borderRadius: 20,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:22,
   }
});