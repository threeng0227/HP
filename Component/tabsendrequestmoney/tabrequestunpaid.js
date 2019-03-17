import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content,Icon, Right} from 'native-base';

export default class TabrequestPaid extends React.Component{
    render (){
        return(
            <Container>
            <Content>
                <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%'}}>
                    Your balance:
                </Text>
                <Text style={{color:'green',fontSize:21,paddingLeft:'33%',paddingTop:'3%'}}>
                    $ 764.00
                </Text>   
                </View>
            
                <Button primary style={site.btn}><Text style={site.btn1}> Send request </Text></Button> 
               
     <View>
          <Text style={site.Text}>History</Text>
         <View style={site.view2}>
             <View style={{flex: 2}}>
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
                $ 25
                </Text>
             </View>
             <View style={{flex: 1}}>
                <Text style={{paddingLeft:'30%',paddingTop:'19%',fontStyle:"italic"}}>
                UnPaid
                </Text>
              </View>
        </View>
        
        <View style={site.view}>
             <View style={{flex: 2}}>
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
        <View style={site.view}>
             <View style={{flex: 2}}>
                <Text style={site.txt}>
                Jan 11 2019
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
        
        <View style={site.view}>
          <View style={{flex: 2}}>
          <Text style={site.txt}>
          Jan 11 2019
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
     </View>
            </Content>
            
          </Container>
            );
    }
}
var site=StyleSheet.create({
    view2:{
        backgroundColor:'white',
       flex:1,
        borderRadius: 5,
        height:110,
        margin:'2%',      
        flexDirection:'row',
        borderColor:'skyblue',borderWidth:0.5
      },
    txt:{
        paddingLeft:'12%',paddingTop:'7.5%'
      },
      txtpend:{
          color:'white',
        paddingLeft:'18%',paddingTop:'15%'
      },
      txt1:{
        paddingTop:'8%',
        fontSize:13
      },
      txtpend1:{color:'white',
        paddingLeft:'18%',paddingTop:'7.5%'
      },

      view:{
        backgroundColor:'#EEEEEE',
        borderRadius: 5,
        height:110,
       
        margin:'2%',
        flexDirection:'row',
      },
      viewpend:{
        backgroundColor:'#1874CD',
        borderRadius: 5,
        height:110,
      color:'white',
        margin:'2%',
        flexDirection:'row',
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
        color:'black',fontSize:18,marginLeft:'2%',
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
    
    