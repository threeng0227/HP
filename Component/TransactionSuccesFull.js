import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch, Title} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export default class TransactionSend2 extends Component {
  
  
  render() {
   
      return (
        <Container style={{marginBottom:20}}>
 <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Notification</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
      <Content>
        <View style={{justifyContent:'center',alignItems:"center",flexDirection:'column',marginTop:20}}>
          <Text style={{textAlign:'center',fontSize:32,fontWeight:'bold'}}>Transaction Successful</Text>
         
          <Image source={require('../Appointments/images/MaQR.png')}></Image>
          <Text style={{fontStyle:'italic',textAlign:'center'}}>Scan to verify on MerChant Application</Text>
        </View>
       
       
      </Content>
      <View style={{justifyContent:'center',alignItems:"center",flexDirection:'row',marginBottom:20}}>
         
         <Button style={{borderRadius:3,width:150,height:50,
        justifyContent:'center',alignItems:"center",flexDirection:'row'}}
        onPress={()=>{this.props.navigation.navigate('Home2')}}><Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Done</Text></Button>
       </View>
        </Container>
       
      
      )
      
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
  
});