import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class Notificationnn extends Component {
  constructor(props ){
    super(props);
    this.state={
      switch1Value:false,
    }
  }
  render() {
    return (
      <Container >
        
          
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{ justifyContent: 'flex-end',alignItems: 'center',flex:3,width: 350, height: 50, }} >
        <Image style={{height:85,width:85}}
            source={require('../Appointments/images/Maskgiftt.png')} 
                />
        </View>
        <View style={{ justifyContent: 'center',alignItems: 'center',flex:1,width: 350, height: 50, }} >
        <Text style={{fontSize:21,color:'skyblue'}}>Received gift card successfully !</Text>
        </View>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:1,width: 350, height: 50, }} >
        <Text style={{fontSize:24,color:'green',fontWeight:'bold'}}>+ $ 50.00</Text>
        </View>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:1,width: 350, height: 50, }} >
        <Text style={{color:'black'}}>You've successfully received the gift card from</Text>
        <Text style={{fontSize:20,color:'skyblue',fontWeight:'bold',marginTop:'3%'}}>William</Text>
        </View>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:1,width: 350, height: 50}} >
        <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:300,borderColor:'#EEEEEE',flexDirection:'row',height:40}}>
             <Text style={{fontSize:16,color:'black',flex:1,marginBottom:'7%',marginLeft:'4%'}}>Current balance:</Text>
             <Text style={{fontSize:20,color:'green',fontWeight:'bold',flex:1,marginBottom:'7%',marginRight:'-25%'}}>$ 764.00</Text>
        </View>
        
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',flex:1,width: 350, height: 50, }} >
            <Button  style={site.btn}><Text style={site.btn1}> Done </Text></Button> 
        </View>
      </View>
        
       
      </Container>
    );
  }
}
var site=StyleSheet.create({

  text:{
    color:'black',fontSize:12
  },
 
  icon:{
    
    color:'gray',
  },
  header:{
    backgroundColor:'white',
    color:'#00BFFF',
  },
  btn:{
    backgroundColor:'#00B2EE',
  width:'40%',
  marginLeft:'30%',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   },
});