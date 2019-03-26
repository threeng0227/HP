import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content,Icon, Right} from 'native-base';

export default class Tabsend864 extends React.Component{
  
    render (){
        return(
            <Container>
            <Content>
            
            <View>
          <Text style={site.Text}> Pending requests: </Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PayRquest')}}>
          <View style={site.view32}>
             <View style={{flex:2}}>
                <Text style={site.txt33}>
                    Today
                </Text>
                <Text style={site.txt33}>
                    Receiver:
                 </Text >
                <Text style={site.txt33}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={site.txt32}>
                11 : 00 AM
                </Text>
                <Text style={site.txt32}>
                Jerry Nguyen (You)
                </Text>
                <Text style={site.txt32}>
                $ 100
                </Text>
             </View>
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
                <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic",color:'white'}}>
                Unpaid
                </Text>
            
                </View>
            </View></TouchableOpacity>
          <Text style={site.Text}>History</Text>
            <View style={site.view}>
             <View style={{flex: 2}}>
                <Text style={site.txt}>
                    Today
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
                $ 10
                </Text>
             </View>
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
                <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic"}}>
                Received
                </Text>
            
                </View>
            </View>
        </View> 
        <View style={site.view}>
          <View style={{flex:2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
          <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
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
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
          <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
            </Content>
       
          </Container>
            );
    }
}
var site=StyleSheet.create({
    
      view32:{
        backgroundColor:'#0764b0',
       borderColor:'#0764b0',
        borderRadius: 5,
        height:110,
        margin:'2%',
        flexDirection:'row',
        borderWidth:1
      },
    txt:{
      paddingLeft:'12%',paddingTop:'7.5%',color:'black'
      },
      txt33:{
        paddingLeft:'12%',paddingTop:'7.5%',color:'white'
      },
    
      txt1:{
        paddingTop:'8%',
        fontSize:13,color:'black'
      },
      txt32:{
        paddingTop:'8%',
        fontSize:13,color:'white'
      },
     
      Text:{
        color:'black',fontSize:16,marginLeft:'2%'
      },

      view:{
        backgroundColor:'#fafafa',
        borderRadius: 5,
        height:110,
       borderColor:'#EEEEEE',
        margin:'2%',
        flexDirection:'row',
        borderWidth:1
      },
      viewpend:{
       
        
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginRight:'3%',
        marginLeft:'3%',
        marginBottom:'3%'
      },
   
});
    
    