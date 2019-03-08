import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content} from 'native-base';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class gift extends React.Component{
    render (){
        return(
            <Container >
            <Header style={site.header}>
            
            <Image style={site.img}
          source={require('../Appointments/images/img.png')}
            />
            <Left >
            <Button transparent >
              <Icon name='chevron-left' style={{marginBottom:100,size:25}}/>
            </Button>
          </Left>
          <Body style={{margin:80}}>
            <Title style={{marginBottom:100,color:'white'}}>P2P Gift</Title>
          </Body> 
            
           
       
                
        </Header>
            <Content style={{backgroundColor:'lightgray',flex:1}}>    
            <Button iconLeft style={site.view}>
            <View style={site.tron}><Icon style={site.ic} name='logo-usd' /></View>
                
                  <Text style={site.txt}>
                      REQUEST MONEY
                  </Text>
              
            </Button>    
            <Button iconLeft style={site.view}>
            <View style={site.tron}><Icon style={site.ic} name='home' /></View>
                  <Text style={site.txt2}>
                      GIFT CARDS
                  </Text>
              
            </Button>    
            <Button iconLeft style={site.view}>
            <View style={site.tron}><Icon style={site.ic} name='home' /></View>
                  <Text style={site.txt3}>
                      SEND MONEY
                  </Text>
              
            </Button>    
              
                   
            </Content>
            <Footer >
              <FooterTab style={{backgroundColor:'white'}}> 
                <Button vertical>
                  <Icon name="home"style={site.icon} />
                  <Text style={site.Text}>Home</Text>
                </Button>
                <Button vertical>
                  <Icon name="store-alt" style={site.icon}/>
                  <Text style={site.Text}>Stores</Text>
                </Button>
                <Button vertical >
                  <Icon name="calendar"style={site.icon} />
                  <Text style={site.Text}>Appointment</Text>
                </Button>
                <Button vertical>
                  <Ic name="gift" style={site.icon}/>
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
      
     height:150
    },
    view:{
        paddingLeft:16,
        width:340,
      height:162,
      backgroundColor:'white',
      marginLeft:10,
      marginRight:10,
      marginTop:5,
      borderRadius:5,
    },
    txt:{
        fontSize:24,
        color:'#00BFFF',
        paddingRight:20
    },
    txt2:{
        fontSize:24,
        color:'#00BFFF',
        paddingRight:80
    },
    txt3:{
        fontSize:24,
        color:'#00BFFF',
        paddingRight:65
    },
    ic:{

        fontSize:40,
        color:'#00BFFF',
         paddingLeft:11,
         paddingTop:18
    },
    tron:
    {width:90,
        height:90,
        borderWidth:2,
        borderRadius:50,
        borderColor:'#00BFFF'
    },
    img:{
      resizeMode:'stretch',
      position:'absolute'
    }
  });