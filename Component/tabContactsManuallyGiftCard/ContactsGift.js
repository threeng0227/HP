import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content,Icon, Right, CheckBox} from 'native-base';

export default class TabContactsGift extends React.Component{
    state={
        one:false,
        two:false,
        three :false,
        four :false,
        five:false
    }
    onePressed(){
        this.setState({one:true, two:false,three :false,four :false,five:false});
    }
    twoPressed(){
        this.setState({one:false, two:true,three :false,four :false,five:false});
    }
    threePressed(){
        this.setState({one:false, two:false,three :true,four :false,five:false});
    }
    fourPressed(){
        this.setState({one:false, two:false,three :false,four :true,five:false});
    }
    fivePressed(){
        this.setState({one:false, two:false,three :false,four :false,five:true});
    }
    render (){
        return(
        <View>
           <View style={site.view}>
            <Image style={site.img}
          source={require('../../Appointments/images/women.png')} 
            />
            <View style={site.viewtxt}>
            <Text>William</Text>
            <Text>1234 4567 78978 445</Text></View>
            <View style={site.viewtxt1}><CheckBox   style={site.check} checked={this.state.one}
             onPress={() => this.onePressed()}></CheckBox></View>
            </View>
            <View style={site.view}>
            <Image style={site.img}
          source={require('../../Appointments/images/women.png')} 
            />
            <View style={site.viewtxt}>
            <Text>William</Text>
            <Text>1234 4567 78978 445</Text></View>
            <View style={site.viewtxt1}><CheckBox style={site.check} checked={this.state.two}
             onPress={() =>this.twoPressed()} /></View>
            </View>
            <View style={site.view}>
            <Image style={site.img}
          source={require('../../Appointments/images/women.png')} 
            />
            <View style={site.viewtxt}>
            <Text>William</Text>
            <Text>1234 4567 78978 445</Text></View>
            <View style={site.viewtxt1}><CheckBox  style={site.check} checked={this.state.three}
             onPress={() =>this.threePressed()}></CheckBox></View>
            </View>
            <View style={site.view}>
            <Image style={site.img}
          source={require('../../Appointments/images/women.png')} 
            />
            <View style={site.viewtxt}>
            <Text>William</Text>
            <Text>1234 4567 78978 445</Text></View>
            <View style={site.viewtxt1}><CheckBox  style={site.check} checked={this.state.four}
             onPress={() =>this.fourPressed()}></CheckBox></View>
            </View>
            <View style={site.view}>
            <Image style={site.img}
          source={require('../../Appointments/images/women.png')} 
            />
            <View style={site.viewtxt}>
            <Text>William</Text>
            <Text>1234 4567 78978 445</Text></View>
            <View style={site.viewtxt1}><CheckBox  style={site.check} checked={this.state.five}
             onPress={() =>this.fivePressed()}></CheckBox></View>
            </View>
            <View style={site.view11}>
          <Button  style={site.btn}><Text style={site.btn1}> Next </Text></Button> 
          </View>
        </View>
        
              );
    }
}
var site=StyleSheet.create({
   view:{
       height:70,
       borderWidth:1,
       borderColor:'gray',
       marginBottom:2,
       flex:1,
       flexDirection:'row'
   },
   img:{
    height:50,width:50,marginTop:'3%',marginLeft:'3%'
   },
   viewtxt:{
    flex:2,
    justifyContent:'center',
    paddingLeft:'5%'
   },
   viewtxt1:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight:'6%'
   },
   check:{
       borderRadius:30,
       height:30,
       width:30,
       alignItems:'center',
       justifyContent:'center',
       borderWidth:0,
       borderColor:'#EEEEEE'
   },
   btn:{
    backgroundColor:'#00B2EE',
  width:'45%',
  
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   },
   view11:{marginTop:'8%',marginBottom:'8%',
      flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
   }
});
    
    