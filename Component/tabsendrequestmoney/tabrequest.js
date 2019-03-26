import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content,Icon, Right} from 'native-base';

export default class Tabrequest extends React.Component{
 
    render (){
        return(
          <Container>
          <Content>
              
             
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
              $ 10
              </Text>
           </View>
           <View style={{flex: 1,justifyContent: 'flex-start'}}>
              <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
              UnPaid
              </Text>
            </View>
      </View>
      
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
              $ 50
              </Text>
           </View>
           <View style={{flex: 1,justifyContent: 'flex-start'}}>
              <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
              Paid
              </Text>
            </View>
      </View>
      <View style={site.view2}>
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
           <View style={{flex: 1,justifyContent: 'flex-start',}}>
              <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
              Paid
              </Text>
            </View>
      </View>
      
      <View style={site.view2}>
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
        <View style={{flex: 1,justifyContent: 'flex-start',}}>
        <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
            Pending
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
      backgroundColor:'#fafafa',
      borderColor:'#EEEEEE',
       flex:1,
        borderRadius: 5,
        height:110,
        margin:'2%',      
        flexDirection:'row',
        borderWidth:1
      },
    txt:{
        paddingLeft:'12%',paddingTop:'7.5%',color:'black'
      },
     
      txt1:{
        paddingTop:'8%',
        fontSize:13,color:'black'
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
    
    