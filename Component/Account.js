import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Title,FooterTab, Content, ListItem, Right} from 'native-base';

export default class Account extends Component {
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
            <Title style={site.header} >Account</Title>
          </Body>        
        </Header>
        <Content style={{backgroundColor:'lightgray'}}>
        <Title style={{color:'blue',fontSize:16,backgroundColor:'lightgray'}}>Select the account to pay</Title>
         <View style={{backgroundColor:'lightgray',borderBottomWidth:1,height:180,marginLeft:12,marginRight:12}}>
           <Text>
             
           </Text>
         </View>
         <View style={{backgroundColor:'white',height:330,margin:13,borderRadius:4}}>
            <Title style={{color:'blue',fontSize:26}}>Credit Card Details</Title>
            <View style={{backgroundColor:'white',borderBottomWidth:1,marginLeft:10,marginRight:10,marginTop:15,height:85,flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>
           <Text style={{color:'blue'}}>
             Card number:
           </Text>
           <Text style={{color:'#00BFFF',marginTop:30}}>
             12213 102921830 123
           </Text>
           
         </View>
         <View style={{backgroundColor:'white',marginLeft:10,marginRight:10,borderBottomWidth:1,height:85,marginTop:15}}>
           <Text style={{color:'blue'}}> 
             Card holder's name:
           </Text>
           <Text style={{color:'#00BFFF',marginTop:30}}>
             Jerry Nguyen
           </Text>
         </View >
         <View style={{backgroundColor:'white',marginLeft:10,marginRight:10,marginTop:15,flex:1,flexDirection:'row'}}>
         <View style={{height:70,borderBottomWidth:1,width:'40%'}}>
         <Text style={{color:'blue'}}>
             Expired date:
             </Text>
             <Text style={{color:'#00BFFF',marginTop:20}}>
             09/22
             </Text>
         </View>
           <View style={{height:70,borderBottomWidth:1,marginLeft:'20%',width:'40%'}}>
           <Text style={{color:'blue'}}>
             CVV Number:
             </Text>
             <Text style={{color:'#00BFFF',marginTop:20}}>
             123
             </Text>
           </View>
          
         </View>
         </View>
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