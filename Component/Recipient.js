import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Title,FooterTab, Content, ListItem, Right} from 'native-base';

export default class Recipient extends Component {
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
            <Title style={site.header} >Recipient</Title>
          </Body>        
        </Header>
        <Content style={{backgroundColor:'lightgray'}}>
        <Text>SADS</Text>
        
          <View style={site.btn}>
            <View style={site.btn1}>
            <Button  style={{backgroundColor:'#00BFFF',justifyContent: 'center',alignItems:'center',borderRadius: 20, width:120,  height:40}}>
            <Text style={{ color:'white',fontSize:22}}>Next</Text>
          </Button>
            </View>
          </View>
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
              <Icon name="md-gift" style={site.icon}/>
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
  
   backgroundColor:'lightgray',
  
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    
  
 
  },
  btn1:{
    marginBottom:8,
    borderRadius: 20,
   width:120,
   height:40,
   backgroundColor:'red',
   alignContent:'center',
   
   }
});