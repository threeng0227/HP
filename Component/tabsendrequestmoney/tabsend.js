import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content,Icon, Right} from 'native-base';

export default class Tabsend extends React.Component{
    render (){
        return(
            <Container>
            <Content>
                
               
            <View>
          <Text style={site.Text}> Pending requests </Text>
          <View style={site.viewpend}>
            <Text style={{fontStyle:"italic",fontSize:14}}>You have no pending request</Text>
          </View>
          <Text style={site.Text}>History</Text>
            <View style={site.view2}>
             <View style={{flex: 1}}>
                <Text style={site.txt}>
                    Yesterday
                </Text>
                <Text style={site.txt}>
                    Receiver:
                 </Text >
                <Text style={site.txt}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={site.txt1}>
                11 : 00 AM
                </Text>
                <Text style={site.txt1}>
                Jerry Nguyen (You)
                </Text>
                <Text style={site.txt1}>
                $ 50
                </Text>
             </View>
          <View style={{flex: 1}}>
                <Text style={{paddingLeft:'45%',paddingTop:'19%',fontStyle:"italic"}}>
                Paid
                </Text>
            
                </View>
            </View>
        </View> 
        <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'45%',paddingTop:'19%',fontStyle:"italic"}}>
              Paid
            </Text>
           
          </View>
          </View>
          <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William, Jerry Nguyen
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'45%',paddingTop:'19%',fontStyle:"italic"}}>
              Paid
            </Text>
           
          </View>
          </View>
            </Content>
       
          </Container>
            );
    }
}
var site=StyleSheet.create({
    view2:{
        backgroundColor:'white',
       borderColor:'skyblue',
        borderRadius: 5,
        height:110,
        margin:'3%',
        flexDirection:'row',
        borderWidth:1
      },
    txt:{
        paddingLeft:'18%',paddingTop:'15%'
      },
      txtpend:{
          color:'white',
        paddingLeft:'18%',paddingTop:'15%'
      },
      txt1:{
        paddingLeft:'18%',paddingTop:'8%',
        fontSize:13
      },
      txtpend1:{color:'white',
        paddingLeft:'18%',paddingTop:'7.5%'
      },
      Text:{
        color:'white',fontSize:16,marginLeft:'3%'
      },

      view:{
        backgroundColor:'#EEEEEE',
        borderRadius: 5,
        height:110,
       
        margin:'3%',
        flexDirection:'row',
      },
      viewpend:{
       
        
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginRight:'3%',
        marginLeft:'3%',
        marginBottom:'3%'
      },
    view1:{
        height:50,
        marginLeft:'4%',
        marginTop:'4%',
        marginRight:'4%',
        borderWidth:1,
        borderRadius:2,
        borderColor: 'silver',
       
        flexDirection:'row'
    },
    text:{
        color:'black',fontSize:12
      },
      Text:{
        color:'black',fontSize:16,marginLeft:'3%'
      },
      icon:{    
        color:'gray',
      },
      btn:{
          height:50,
      width:'43%',
      marginBottom:'3%',
      marginLeft:'32%',
      marginTop:'3%',
      borderRadius: 4,
      justifyContent: 'center',
        alignItems:'center'
      },
      btn1:{
          marginTop:'10%',
       color:'white',
       fontSize:16,
       }
});
    
    